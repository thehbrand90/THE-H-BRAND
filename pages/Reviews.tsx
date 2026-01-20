import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Review } from '../types';
import { ChevronDown, ChevronUp, Image as ImageIcon, ArrowRight } from 'lucide-react';

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('id', { ascending: false });

      if (error) {
        throw error;
      }

      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-20 max-w-[1200px] mx-auto min-h-screen">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-brand-dark">REVIEWS</h1>
        <p className="text-gray-500">고객님들의 소중한 후기입니다.</p>
      </div>

      {/* Board Header */}
      <div className="hidden md:grid grid-cols-12 gap-4 border-b-2 border-brand-dark pb-4 text-sm font-bold tracking-widest text-brand-dark">
        <div className="col-span-1 text-center">No.</div>
        <div className="col-span-7">Subject</div>
        <div className="col-span-2 text-center">Author</div>
        <div className="col-span-2 text-center">Date</div>
      </div>

      {/* Board Items */}
      <div className="border-b border-gray-300 min-h-[200px]">
        {loading ? (
           <div className="py-20 text-center text-gray-400 font-light">
             Loading reviews...
           </div>
        ) : reviews.length === 0 ? (
           <div className="py-20 text-center text-gray-400 font-light">
             등록된 후기가 없습니다.
           </div>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200">
              <div 
                onClick={() => toggleExpand(review.id)}
                className="group md:grid md:grid-cols-12 gap-4 py-6 items-center hover:bg-gray-50 transition-colors cursor-pointer"
              >
                {/* Mobile View */}
                <div className="md:hidden mb-2 px-2">
                   <div className="flex justify-between text-xs text-gray-500 mb-1">
                     <span>{review.author}</span>
                     <span>{review.date}</span>
                   </div>
                   <div className="flex justify-between items-center">
                     <h3 className="text-lg font-medium text-brand-dark">
                       {review.title}
                       {review.image && <ImageIcon size={14} className="inline ml-2 text-gray-400" />}
                     </h3>
                     {expandedId === review.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                   </div>
                   <div className="mt-2 text-brand-brown text-xs">{'★'.repeat(review.rating)}</div>
                </div>

                {/* Desktop View */}
                <div className="hidden md:block col-span-1 text-center text-gray-400 font-mono">{review.id}</div>
                <div className="hidden md:block col-span-7">
                  <h3 className="text-lg font-normal text-brand-dark group-hover:text-brand-brown transition-colors flex items-center">
                    {review.title}
                    {review.image && <ImageIcon size={14} className="ml-2 text-gray-400" />}
                  </h3>
                </div>
                <div className="hidden md:block col-span-2 text-center text-sm text-gray-600">{review.author}</div>
                <div className="hidden md:block col-span-2 text-center text-sm text-gray-400 font-mono">{review.date}</div>
              </div>

              {/* Expanded Content */}
              {expandedId === review.id && (
                <div className="bg-gray-50 p-6 md:p-10 animate-fade-in-up">
                  <div className="max-w-4xl mx-auto">
                    {/* Rating & Content */}
                    <div className="mb-6">
                      <div className="text-brand-brown text-sm mb-4">{'★'.repeat(review.rating)}</div>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{review.content}</p>
                    </div>
                    
                    {/* Image Attachment */}
                    {review.image && (
                      <div className="mt-8">
                        <img 
                          src={review.image} 
                          alt="Review attachment" 
                          className="max-w-full md:max-w-lg rounded-lg shadow-md"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Pagination Mock (Hidden if no reviews) */}
      {!loading && reviews.length > 0 && (
        <div className="flex justify-center mt-12 space-x-2">
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-brand-dark hover:text-white transition-colors">1</button>
        </div>
      )}

      {/* Write Review Link Box with Image Background */}
      <div className="mt-24 relative w-full h-[400px] flex flex-col items-center justify-center text-center overflow-hidden group rounded-sm shadow-xl">
        {/* Background Image */}
        <img 
          src="https://i.postimg.cc/c1D3Wvfb/review.jpg" 
          alt="Write Review Background" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>

        {/* Content */}
        <div className="relative z-10 p-8">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Write a Review</h3>
          <p className="text-base md:text-lg text-gray-200 mb-10 font-light tracking-wide">
            THE H BRAND와의 경험을 공유해주세요.
          </p>
          <a 
            href="https://naver.me/FaOEfZUr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white/80 px-10 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-brand-dark hover:border-white transition-all duration-300"
          >
            후기 남기기 <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;