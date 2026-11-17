import React, { useEffect, useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Review } from '../types';
import {
  Trash2,
  Edit,
  Plus,
  LogOut,
  Check,
  X as XIcon,
  Image as ImageIcon,
  Loader2,
  AlertTriangle,
  Star,
} from 'lucide-react';
import { compressImageFile, formatBytes, payloadBytes } from '../lib/imageCompress';

const { useNavigate } = ReactRouterDOM;

/** Rows above this would put the record back in the range that times out. */
const MAX_PAYLOAD_BYTES = 3 * 1024 * 1024;

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompressing, setIsCompressing] = useState(false);
  const [originalSizes, setOriginalSizes] = useState<number[]>([]);
  const [message, setMessage] = useState<{ type: 'ok' | 'error'; text: string } | null>(null);

  // Form state
  const [isEditing, setIsEditing] = useState<string | number | null>(null);
  const [loadingEditId, setLoadingEditId] = useState<string | number | null>(null);
  const [form, setForm] = useState({
    title: '',
    client_name: '',
    content: '',
    rating: 5,
    images: [] as string[],
  });

  useEffect(() => {
    checkUser();
    fetchReviews();
  }, []);

  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => setMessage(null), 4000);
    return () => clearTimeout(timer);
  }, [message]);

  const checkUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) navigate('/admin');
  };

  /**
   * The list only asks for text columns. Review photos live as base64 in
   * `image_urls`, so selecting '*' made the dashboard pull tens of megabytes
   * and time out. Photos are fetched per review when it is opened for editing.
   */
  const fetchReviews = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('id, title, client_name, content, rating, created_at, is_best')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews((data as Review[]) || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setMessage({ type: 'error', text: '리뷰 목록을 불러오지 못했습니다.' });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: File[] = e.target.files ? Array.from(e.target.files) : [];
    e.target.value = '';
    if (files.length === 0) return;

    const room = 3 - form.images.length;
    if (room <= 0) {
      setMessage({ type: 'error', text: '이미지는 최대 3장까지 등록할 수 있습니다.' });
      return;
    }

    setIsCompressing(true);
    try {
      const picked = files.slice(0, room);
      const results = await Promise.all(picked.map((file) => compressImageFile(file)));
      setForm((prev) => ({ ...prev, images: [...prev.images, ...results.map((r) => r.dataUrl)] }));
      setOriginalSizes((prev) => [...prev, ...results.map((r) => r.originalBytes)]);
      setMessage({
        type: 'ok',
        text: `${results.length}장을 1600px·WebP로 압축했습니다. (${results
          .map((r) => `${formatBytes(r.originalBytes)} → ${formatBytes(r.bytes)}`)
          .join(', ')})`,
      });
    } catch (error) {
      console.error('Image compression failed:', error);
      setMessage({ type: 'error', text: '이미지를 처리하지 못했습니다. 다른 파일로 시도해 주세요.' });
    } finally {
      setIsCompressing(false);
    }
  };

  const removeImage = (indexToRemove: number) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, index) => index !== indexToRemove),
    }));
    setOriginalSizes((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const resetForm = () => {
    setForm({ title: '', client_name: '', content: '', rating: 5, images: [] });
    setOriginalSizes([]);
    setIsEditing(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isCompressing) return;

    const totalBytes = payloadBytes(form.images);
    if (totalBytes > MAX_PAYLOAD_BYTES) {
      setMessage({
        type: 'error',
        text: `첨부 용량이 너무 큽니다 (${formatBytes(totalBytes)}). 사진 수를 줄이거나 다시 압축해 주세요.`,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload: any = {
        title: form.title,
        client_name: form.client_name,
        content: form.content,
        rating: Number(form.rating),
        image_urls: form.images,
      };

      if (isEditing) {
        const { error } = await supabase.from('reviews').update(payload).eq('id', isEditing);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('reviews').insert([payload]);
        if (error) throw error;
      }

      await fetchReviews();
      resetForm();
      setMessage({ type: 'ok', text: isEditing ? '리뷰를 수정했습니다.' : '리뷰를 등록했습니다.' });
    } catch (error) {
      console.error('Error saving review:', error);
      setMessage({ type: 'error', text: '저장 중 오류가 발생했습니다.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string | number) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    try {
      const { error } = await supabase.from('reviews').delete().eq('id', id);
      if (error) throw error;
      await fetchReviews();
      setMessage({ type: 'ok', text: '삭제했습니다.' });
    } catch (error) {
      console.error('Error deleting review:', error);
      setMessage({ type: 'error', text: '삭제 중 오류가 발생했습니다.' });
    }
  };

  /** Photos are loaded only for the review being edited. */
  const startEdit = async (review: Review) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setLoadingEditId(review.id);
    let images: string[] = [];
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('image_urls')
        .eq('id', review.id)
        .maybeSingle();
      if (error) throw error;
      images = ((data as { image_urls?: string[] } | null)?.image_urls) || [];
    } catch (error) {
      console.error('Error fetching review images:', error);
      setMessage({ type: 'error', text: '첨부 사진을 불러오지 못했습니다.' });
    } finally {
      setLoadingEditId(null);
    }

    setIsEditing(review.id);
    setForm({
      title: review.title,
      client_name: review.client_name,
      content: review.content,
      rating: review.rating,
      images,
    });
    setOriginalSizes([]);
  };

  const formatDate = (dateString: string) => (dateString ? dateString.split('T')[0] : '');

  const totalBytes = payloadBytes(form.images);
  const originalTotal = originalSizes.reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-brand-dark text-brand-bg px-5 md:px-12 h-[72px] flex justify-between items-center">
        <div className="flex items-baseline gap-4">
          <span className="font-montserrat text-[15px] tracking-[0.2em]">THE H ADMIN</span>
          <span className="hidden sm:block font-montserrat text-[9px] tracking-[0.24em] text-white/35">
            REVIEW MANAGER
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center font-montserrat text-[10px] tracking-[0.2em] text-white/70 hover:text-white transition-colors"
        >
          <LogOut size={14} className="mr-2" /> LOGOUT
        </button>
      </header>

      <div className="max-w-[1200px] mx-auto w-full px-5 md:px-10 py-10 md:py-14">
        {message && (
          <div
            className={`mb-8 flex items-start gap-3 px-5 py-4 text-[13px] border ${
              message.type === 'ok'
                ? 'border-brand-clay/30 bg-brand-clay/[0.07] text-brand-ink'
                : 'border-red-300 bg-red-50 text-red-700'
            }`}
          >
            {message.type === 'ok' ? (
              <Check size={15} className="mt-0.5 shrink-0 text-brand-clay" />
            ) : (
              <AlertTriangle size={15} className="mt-0.5 shrink-0" />
            )}
            <span className="break-keep-all">{message.text}</span>
          </div>
        )}

        {/* Editor */}
        <div className="bg-brand-paper border border-brand-line/70 mb-10">
          <div className="px-6 md:px-8 py-5 border-b border-brand-line/60 flex items-center justify-between">
            <h2 className="flex items-center text-sm font-medium tracking-wide">
              {isEditing ? <Edit size={16} className="mr-2.5" /> : <Plus size={16} className="mr-2.5" />}
              {isEditing ? '리뷰 수정' : '새 리뷰 작성'}
            </h2>
            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="font-montserrat text-[10px] tracking-[0.18em] text-brand-gray hover:text-brand-ink"
              >
                CANCEL EDIT
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="md:col-span-1">
                <label className="block font-montserrat text-[9px] tracking-[0.22em] text-brand-gray mb-2">
                  작성자 (CLIENT)
                </label>
                <input
                  type="text"
                  name="client_name"
                  value={form.client_name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-brand-bg border border-brand-line px-3 py-2.5 text-sm focus:outline-none focus:border-brand-clay transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block font-montserrat text-[9px] tracking-[0.22em] text-brand-gray mb-2">
                  제목 (TITLE)
                </label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-brand-bg border border-brand-line px-3 py-2.5 text-sm focus:outline-none focus:border-brand-clay transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-montserrat text-[9px] tracking-[0.22em] text-brand-gray mb-2">
                평점 (RATING)
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, rating: n }))}
                    aria-label={`${n}점`}
                    className="p-1"
                  >
                    <Star
                      size={20}
                      className={
                        n <= Number(form.rating)
                          ? 'fill-brand-clay text-brand-clay'
                          : 'text-brand-line'
                      }
                    />
                  </button>
                ))}
                <span className="ml-2 text-xs text-brand-gray">{form.rating} / 5</span>
              </div>
            </div>

            <div>
              <label className="block font-montserrat text-[9px] tracking-[0.22em] text-brand-gray mb-2">
                내용 (CONTENT)
              </label>
              <textarea
                name="content"
                value={form.content}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full bg-brand-bg border border-brand-line px-3 py-2.5 text-sm leading-relaxed focus:outline-none focus:border-brand-clay transition-colors resize-y"
              ></textarea>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block font-montserrat text-[9px] tracking-[0.22em] text-brand-gray">
                  사진 (PHOTOS) · 최대 3장
                </label>
                <span className="text-[10px] text-brand-gray">
                  {form.images.length}/3
                  {form.images.length > 0 && (
                    <>
                      {' · '}
                      <span className={totalBytes > MAX_PAYLOAD_BYTES ? 'text-red-600' : ''}>
                        첨부 {formatBytes(totalBytes)}
                        {originalTotal > 0 && ` (원본 ${formatBytes(originalTotal)})`}
                      </span>
                    </>
                  )}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <label
                  className={`cursor-pointer inline-flex items-center border border-brand-line px-4 py-2.5 text-xs text-brand-gray hover:border-brand-clay hover:text-brand-ink transition-colors ${
                    form.images.length >= 3 || isCompressing
                      ? 'opacity-50 pointer-events-none'
                      : ''
                  }`}
                >
                  {isCompressing ? (
                    <Loader2 size={15} className="mr-2 animate-spin" />
                  ) : (
                    <ImageIcon size={15} className="mr-2" />
                  )}
                  {isCompressing
                    ? '압축 중…'
                    : form.images.length >= 3
                    ? '최대 개수 도달'
                    : '이미지 추가'}
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="hidden"
                    disabled={form.images.length >= 3 || isCompressing}
                  />
                </label>

                {form.images.map((img, idx) => (
                  <div key={idx} className="relative group w-[74px] h-[74px]">
                    <img
                      src={img}
                      alt={`첨부 ${idx + 1}`}
                      className="w-full h-full object-cover border border-brand-line"
                      loading="lazy"
                      decoding="async"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(idx)}
                      className="absolute -top-2 -right-2 bg-brand-dark text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      aria-label="사진 삭제"
                    >
                      <XIcon size={11} />
                    </button>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-[11px] leading-relaxed text-brand-gray">
                업로드 시 자동으로 최대 1600px · WebP(품질 0.82)로 압축됩니다. 원본 그대로
                저장되지 않으며, 첨부 총량이 {formatBytes(MAX_PAYLOAD_BYTES)}를 넘으면 저장할 수
                없습니다.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting || isCompressing}
                className={`inline-flex items-center bg-brand-dark text-white px-8 py-3.5 font-montserrat text-[10px] tracking-[0.22em] hover:bg-brand-clay transition-colors ${
                  isSubmitting || isCompressing ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <Loader2 size={14} className="mr-2 animate-spin" />
                ) : (
                  <Check size={14} className="mr-2" />
                )}
                {isSubmitting ? 'SAVING…' : isEditing ? 'UPDATE REVIEW' : 'CREATE REVIEW'}
              </button>
            </div>
          </form>
        </div>

        {/* List */}
        <div className="bg-brand-paper border border-brand-line/70">
          <div className="px-6 md:px-8 py-5 border-b border-brand-line/60 flex justify-between items-center">
            <h2 className="text-sm font-medium tracking-wide">리뷰 목록</h2>
            <span className="font-montserrat text-[10px] tracking-[0.18em] text-brand-gray">
              {reviews.length} ITEMS
            </span>
          </div>

          {loading ? (
            <div className="p-12 text-center text-brand-gray text-sm">
              <Loader2 size={18} className="mx-auto mb-3 animate-spin" />
              불러오는 중…
            </div>
          ) : reviews.length === 0 ? (
            <div className="p-12 text-center text-brand-gray text-sm">등록된 리뷰가 없습니다.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-bg font-montserrat text-[9px] tracking-[0.2em] text-brand-gray">
                    <th className="p-4 font-medium w-20">NO.</th>
                    <th className="p-4 font-medium">SUBJECT</th>
                    <th className="p-4 font-medium w-32">CLIENT</th>
                    <th className="p-4 font-medium w-28">DATE</th>
                    <th className="p-4 font-medium w-24">RATING</th>
                    <th className="p-4 font-medium w-28 text-right">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="text-[13px]">
                  {reviews.map((review, index) => (
                    <tr
                      key={review.id}
                      className={`border-t border-brand-line/50 hover:bg-brand-bg/60 transition-colors ${
                        isEditing === review.id ? 'bg-brand-clay/[0.06]' : ''
                      }`}
                    >
                      <td className="p-4 text-brand-gray/60 font-montserrat text-[10px]">
                        {reviews.length - index}
                      </td>
                      <td className="p-4 font-medium text-brand-ink">
                        <div className="flex items-center gap-2">
                          <span className="truncate max-w-[380px]">{review.title}</span>
                          {loadingEditId === review.id && (
                            <Loader2 size={12} className="animate-spin text-brand-gray" />
                          )}
                        </div>
                      </td>
                      <td className="p-4 text-brand-gray">{review.client_name}</td>
                      <td className="p-4 font-montserrat text-[10px] text-brand-gray">
                        {formatDate(review.created_at)}
                      </td>
                      <td className="p-4 text-brand-clay text-xs whitespace-nowrap">
                        {'★'.repeat(review.rating)}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => startEdit(review)}
                            className="p-2 text-brand-gray hover:text-brand-ink hover:bg-brand-bg rounded transition-colors"
                            title="수정"
                          >
                            <Edit size={15} />
                          </button>
                          <button
                            onClick={() => handleDelete(review.id)}
                            className="p-2 text-brand-gray hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="삭제"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-brand-gray">
          * 목록은 텍스트 정보만 불러오고, 첨부 사진은 수정을 눌렀을 때 해당 리뷰만 가져옵니다.
          기존 리뷰의 데이터는 이 화면에서 변경되지 않습니다.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
