import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Review } from '../types';
import { ChevronDown, ChevronUp, Image as ImageIcon, ArrowRight, ExternalLink } from 'lucide-react';
import LazyImage from '../components/LazyImage';

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | number | null>(null);
  const [imageMap, setImageMap] = useState<Record<string, string[]>>({});
  const [imageLoadingId, setImageLoadingId] = useState<string | null>(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setLoading(true);
    setLoadError(null);
    try {
      // Do not use select('*') here. Attached photos are stored as base64 in
      // image_urls (a single row is over 10MB), so pulling every column makes
      // the query exceed the Supabase statement timeout and no review loads at
      // all. The list asks only for text columns; photos are fetched per
      // review when it is opened.
      const { data, error } = await supabase
        .from('reviews')
        .select('id, title, client_name, content, rating, created_at, is_best')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setReviews((data as Review[]) || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setLoadError('후기를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };

  const loadImages = async (id: string) => {
    if (imageMap[id] || imageLoadingId === id) return;
    setImageLoadingId(id);
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('image_urls')
        .eq('id', id)
        .maybeSingle();

      if (error) {
        throw error;
      }

      const urls = ((data as { image_urls?: string[] } | null)?.image_urls) || [];
      setImageMap((prev) => ({ ...prev, [id]: urls }));
    } catch (error) {
      console.error('Error fetching review images:', error);
      setImageMap((prev) => ({ ...prev, [id]: [] }));
    } finally {
      setImageLoadingId((prev) => (prev === id ? null : prev));
    }
  };

  const toggleExpand = (id: string | number) => {
    const next = expandedId === id ? null : id;
    setExpandedId(next);
    if (next !== null) {
      loadImages(String(next));
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    return dateString.split('T')[0];
  };

  // Deduplicate reviews for display (keep the first one found)
  // This solves the visual issue of seeing multiple identical posts
  const uniqueReviews = reviews.filter((review, index, self) =>
    index === self.findIndex((r) => (
      r.title === review.title &&
      r.client_name === review.client_name &&
      r.content === review.content
    ))
  );

  return (
    <div className="w-full min-h-screen bg-brand-bg">
      <div className="border-b border-brand-line/60">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-32 md:pt-40 pb-10 md:pb-14">
          <p className="font-montserrat text-[10px] tracking-[0.32em] text-brand-clay mb-6">REVIEW</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-display-lg text-brand-ink">고객의 기록</h1>
            <p className="text-sm font-light text-brand-gray leading-relaxed break-keep-all md:text-right">
              시공을 마친 고객님들이 남겨주신 후기입니다.
              <br />
              사진을 누르면 상세 후기와 시공 사진을 함께 볼 수 있습니다.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 pb-24">

      {/* Review Site Link Banner */}
      <div className="mt-14 md:mt-20 mb-16">
        <a 
          href="https://thehbrand-reviews.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col md:flex-row items-center justify-between bg-brand-dark overflow-hidden rounded-sm p-10 md:p-14 transition-all duration-500 hover:shadow-2xl"
        >
          <div className="relative z-10 w-full md:w-3/4">
            <span className="text-[10px] text-white/50 font-bold uppercase tracking-[0.3em] mb-4 block">Official Review Archive</span>
            <h2 className="text-2xl md:text-3xl font-light text-white mb-6 leading-snug break-keep-all">
              디에이치브랜드 공식 리뷰 사이트<br className="hidden md:block"/>
              생생한 실제 후기를 만나보세요
            </h2>
            <p className="text-white/60 text-sm md:text-base font-light mb-10 max-w-xl leading-relaxed">
              더 깊이 있는 공간 이야기와 상세 사진, 고객님들의 진솔한 평가는 리뉴얼된 공식 리뷰 사이트에서 더욱 편리하게 확인하실 수 있습니다.
            </p>
            <div className="inline-flex items-center text-white text-xs font-bold uppercase tracking-[0.2em] border-b border-white/30 pb-2 group-hover:border-white transition-all">
              공식 리뷰 사이트 방문하기 <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
          
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none overflow-hidden hidden md:block">
             <div className="text-[200px] font-bold text-white absolute top-1/2 left-1/4 -translate-y-1/2 select-none opacity-50 font-serif">
               R
             </div>
          </div>

          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
            <ExternalLink className="text-white w-16 h-16" />
          </div>
        </a>
      </div>

      {/* Board Header */}
      <div className="hidden md:grid grid-cols-12 gap-4 border-b border-brand-ink/70 pb-4 font-montserrat text-[10px] tracking-[0.24em] text-brand-gray">
        <div className="col-span-1 text-center">No.</div>
        <div className="col-span-7">Subject</div>
        <div className="col-span-2 text-center">Author</div>
        <div className="col-span-2 text-center">Date</div>
      </div>

      {/* Board Items */}
      <div className="min-h-[200px]">
        {loading ? (
           <div className="py-20 text-center text-gray-400 font-light">
             Loading reviews...
           </div>
        ) : loadError ? (
           <div className="py-20 text-center text-gray-500 font-light">
             <p className="mb-6">{loadError}</p>
             <button
               onClick={fetchReviews}
               className="border border-brand-dark px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-colors"
             >
               다시 시도
             </button>
           </div>
        ) : uniqueReviews.length === 0 ? (
           <div className="py-20 text-center text-gray-400 font-light">
             등록된 후기가 없습니다.
           </div>
        ) : (
          uniqueReviews.map((review, index) => {
            // Photos are fetched only for the review that is opened
            const displayImages = imageMap[String(review.id)] || [];
            const hasImages = displayImages.length > 0;
            const imagesPending = imageLoadingId === String(review.id);
            // Use index for No. display if IDs are messy UUIDs
            const displayId = uniqueReviews.length - index; 

            return (
              <div key={review.id} className="border-b border-brand-line/70">
                <div 
                  onClick={() => toggleExpand(review.id)}
                  className="group md:grid md:grid-cols-12 gap-4 py-6 md:py-7 items-center hover:bg-brand-paper transition-colors cursor-pointer px-1"
                >
                  {/* Mobile View */}
                  <div className="md:hidden mb-2 px-2">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{review.client_name}</span>
                      <span>{formatDate(review.created_at)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-brand-dark">
                        {review.title}
                        {hasImages && <ImageIcon size={14} className="inline ml-2 text-gray-400" />}
                      </h3>
                      {expandedId === review.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                    <div className="mt-2 text-brand-brown text-xs">{'★'.repeat(review.rating)}</div>
                  </div>

                  {/* Desktop View */}
                  <div className="hidden md:block col-span-1 text-brand-gray/60 font-montserrat text-[11px] tracking-widest">{displayId}</div>
                  <div className="hidden md:block col-span-7">
                    <h3 className="text-[15px] md:text-base font-normal text-brand-ink group-hover:text-brand-clay transition-colors flex items-center">
                      {review.title}
                      {hasImages && <ImageIcon size={14} className="ml-2 text-gray-400" />}
                      {hasImages && displayImages.length > 1 && (
                         <span className="text-[10px] text-gray-400 ml-1 bg-gray-200 px-1 rounded-sm">+{displayImages.length - 1}</span>
                      )}
                    </h3>
                  </div>
                  <div className="hidden md:block col-span-2 text-sm text-brand-ink/70 font-light">{review.client_name}</div>
                  <div className="hidden md:block col-span-2 text-brand-gray/70 font-montserrat text-[11px] tracking-wide">{formatDate(review.created_at)}</div>
                </div>

                {/* Expanded Content */}
                {expandedId === review.id && (
                  <div className="bg-brand-paper border-t border-brand-line/50 p-6 md:p-10 animate-fade-in-up">
                    <div className="max-w-4xl mx-auto">
                      {/* Rating & Content */}
                      <div className="mb-6">
                        <div className="text-brand-brown text-sm mb-4">{'★'.repeat(review.rating)}</div>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{review.content}</p>
                      </div>
                      
                      {/* Image Attachment (Gallery) */}
                      {imagesPending && (
                        <p className="mt-8 text-xs text-gray-400 font-light">사진을 불러오는 중입니다…</p>
                      )}
                      {hasImages && (
                        <div className="mt-8">
                           {/* Single Image Layout */}
                           {displayImages.length === 1 ? (
                             <div className="overflow-hidden rounded-sm shadow-sm max-w-2xl bg-gray-200">
                               <LazyImage 
                                 src={displayImages[0]} 
                                 alt="Review attachment" 
                                 className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                                 containerClassName="w-full h-auto"
                               />
                             </div>
                           ) : (
                             /* Multiple Images Grid Layout (2 or 3) */
                             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                               {displayImages.slice(0, 3).map((img, idx) => (
                                 <div key={idx} className="aspect-[4/3] overflow-hidden rounded-sm shadow-sm group bg-gray-200">
                                    <LazyImage 
                                      src={img} 
                                      alt={`Review attachment ${idx + 1}`} 
                                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                      containerClassName="w-full h-full"
                                    />
                                 </div>
                               ))}
                             </div>
                           )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Write Review Link Box with Image Background */}
      <div className="mt-20 md:mt-24 relative w-full h-[400px] flex flex-col items-center justify-center text-center overflow-hidden group bg-brand-dark">
        {/* Background Image */}
        <LazyImage 
          src="/media/brand/review-cta.webp" 
          alt="Write Review Background" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
          containerClassName="absolute inset-0 w-full h-full"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>

        {/* Content */}
        <div className="relative z-20 p-8">
          <h3 className="text-display-md text-white mb-5">Write a Review</h3>
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
    </div>
  );
};

export default Reviews;