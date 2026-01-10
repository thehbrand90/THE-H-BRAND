import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Review } from '../types';
import { ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';

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
        <h1 className="text-4xl font-bold mb-4">REVIEWS</h1>
        <p className="text-gray-500">고객님들의 소중한 후기입니다.</p>
      </div>

      {/* Board Header */}
      <div className="hidden md:grid grid-cols-12 gap-4 border-b-2 border-black pb-4 text-sm font-bold tracking-widest text-gray-800">
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
                     <h3 className="text-lg font-medium">
                       {review.title}
                       {review.image && <ImageIcon size={14} className="inline ml-2 text-gray-400" />}
                     </h3>
                     {expandedId === review.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                   </div>
                   <div className="mt-2 text-yellow-500 text-xs">{'★'.repeat(review.rating)}</div>
                </div>

                {/* Desktop View */}
                <div className="hidden md:block col-span-1 text-center text-gray-400 font-mono">{review.id}</div>
                <div className="hidden md:block col-span-7">
                  <h3 className="text-lg font-normal group-hover:underline decoration-1 underline-offset-4 flex items-center">
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
                      <div className="text-yellow-500 text-sm mb-4">{'★'.repeat(review.rating)}</div>
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
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-black hover:text-white transition-colors">1</button>
        </div>
      )}
    </div>
  );
};

export default Reviews;