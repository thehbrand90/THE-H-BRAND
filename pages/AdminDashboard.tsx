import React, { useEffect, useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Review } from '../types';
import { Trash2, Edit, Plus, LogOut, Check, X as XIcon, Image as ImageIcon } from 'lucide-react';

const { useNavigate } = ReactRouterDOM;

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [isEditing, setIsEditing] = useState<string | number | null>(null);
  const [form, setForm] = useState({
    title: '',
    client_name: '', // Changed from author
    content: '',
    rating: 5,
    images: [] as string[],
  });

  useEffect(() => {
    checkUser();
    fetchReviews();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin');
    }
  };

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (form.images.length >= 3) {
        alert("이미지는 최대 3장까지 등록 가능합니다.");
        e.target.value = ''; // Reset input
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setForm(prev => ({ ...prev, images: [...prev.images, reader.result as string] }));
        }
      };
      reader.readAsDataURL(file);
    }
    e.target.value = ''; // Reset input to allow re-selection
  };

  const removeImage = (indexToRemove: number) => {
    setForm(prev => ({ 
      ...prev, 
      images: prev.images.filter((_, index) => index !== indexToRemove) 
    }));
  };

  const resetForm = () => {
    setForm({ title: '', client_name: '', content: '', rating: 5, images: [] });
    setIsEditing(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double clicks
    
    setIsSubmitting(true);
    
    try {
      // Prepare payload with correct column names
      const payload: any = {
        title: form.title,
        client_name: form.client_name,
        content: form.content,
        rating: Number(form.rating),
        image_urls: form.images, // Array of strings
      };

      if (isEditing) {
        // Update
        const { error } = await supabase
          .from('reviews')
          .update(payload)
          .eq('id', isEditing);

        if (error) throw error;
      } else {
        // Create
        const { error } = await supabase
          .from('reviews')
          .insert([payload]);

        if (error) throw error;
      }

      await fetchReviews();
      resetForm();
    } catch (error) {
      console.error('Error saving review:', error);
      alert('저장 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string | number) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  const startEdit = (review: Review) => {
    setIsEditing(review.id);
    // Combine legacy image and new image_urls for editing state
    const existingImages = review.image_urls || (review.image ? [review.image] : []);
    
    setForm({
      title: review.title,
      client_name: review.client_name,
      content: review.content,
      rating: review.rating,
      images: existingImages,
    });
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    return dateString.split('T')[0];
  };

  return (
    <div className="min-h-screen bg-[#f1f1f1] flex flex-col">
      {/* Header */}
      <header className="bg-[#1a1a1a] text-white px-6 md:px-12 py-6 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold tracking-widest">THE H ADMIN</h1>
        <button 
          onClick={handleLogout}
          className="flex items-center text-xs font-bold uppercase tracking-wider hover:text-gray-400 transition-colors"
        >
          <LogOut size={16} className="mr-2" /> Logout
        </button>
      </header>

      <div className="flex-grow p-6 md:p-12 max-w-[1200px] mx-auto w-full">
        
        {/* Editor Section */}
        <div className="bg-white p-8 shadow-sm border border-gray-200 mb-12">
          <h2 className="text-lg font-bold mb-6 flex items-center">
            {isEditing ? <Edit size={20} className="mr-2" /> : <Plus size={20} className="mr-2" />}
            {isEditing ? '리뷰 수정 (Edit Review)' : '새 리뷰 작성 (New Review)'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">작성자 (Client Name)</label>
                <input 
                  type="text" 
                  name="client_name"
                  value={form.client_name} 
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">평점 (Rating)</label>
                <select 
                  name="rating" 
                  value={form.rating} 
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-black transition-colors"
                >
                  <option value="5">★★★★★ (5)</option>
                  <option value="4">★★★★☆ (4)</option>
                  <option value="3">★★★☆☆ (3)</option>
                  <option value="2">★★☆☆☆ (2)</option>
                  <option value="1">★☆☆☆☆ (1)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">제목 (Title)</label>
              <input 
                type="text" 
                name="title"
                value={form.title} 
                onChange={handleInputChange}
                required
                className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">내용 (Content)</label>
              <textarea 
                name="content"
                value={form.content} 
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-black transition-colors resize-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                사진 첨부 (Photos) - Max 3
              </label>
              <div className="flex flex-wrap items-center gap-4">
                {/* Upload Button */}
                <label 
                  className={`cursor-pointer bg-white border border-gray-300 px-4 py-3 hover:bg-gray-50 transition-colors flex items-center text-sm text-gray-600 ${form.images.length >= 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ImageIcon size={16} className="mr-2" />
                  {form.images.length >= 3 ? '최대 개수 도달' : '이미지 추가...'}
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    disabled={form.images.length >= 3}
                  />
                </label>

                {/* Thumbnails */}
                {form.images.map((img, idx) => (
                  <div key={idx} className="relative group w-20 h-20">
                    <img 
                      src={img} 
                      alt={`Preview ${idx + 1}`} 
                      className="w-full h-full object-cover border border-gray-200 rounded-sm" 
                    />
                    <button 
                      type="button" 
                      onClick={() => removeImage(idx)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-sm hover:bg-red-600 transition-colors z-10"
                    >
                      <XIcon size={12} />
                    </button>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 mt-2">
                * 최대 3장까지 등록 가능합니다. (현재: {form.images.length}/3)
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-[#222625] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors flex items-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Check size={16} className="mr-2" />
                {isSubmitting ? 'Saving...' : (isEditing ? 'Update Review' : 'Create Review')}
              </button>
              {isEditing && (
                <button 
                  type="button" 
                  onClick={resetForm}
                  className="bg-gray-200 text-gray-600 px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-300 transition-colors flex items-center"
                >
                  <XIcon size={16} className="mr-2" /> Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* List Section */}
        <div className="bg-white shadow-sm border border-gray-200">
           <div className="p-6 border-b border-gray-100 flex justify-between items-center">
             <h2 className="text-lg font-bold">리뷰 목록 (Review List)</h2>
             <span className="text-sm text-gray-500">Total: {reviews.length}</span>
           </div>

           {loading ? (
             <div className="p-12 text-center text-gray-400">Loading...</div>
           ) : (
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-gray-50 text-xs text-gray-500 font-bold uppercase tracking-wider">
                     <th className="p-4 border-b border-gray-200 w-24 text-center">ID</th>
                     <th className="p-4 border-b border-gray-200">Title</th>
                     <th className="p-4 border-b border-gray-200 w-32">Client</th>
                     <th className="p-4 border-b border-gray-200 w-32">Date</th>
                     <th className="p-4 border-b border-gray-200 w-24">Rating</th>
                     <th className="p-4 border-b border-gray-200 w-32 text-center">Actions</th>
                   </tr>
                 </thead>
                 <tbody className="text-sm">
                   {reviews.length === 0 ? (
                     <tr>
                       <td colSpan={6} className="p-8 text-center text-gray-400">No reviews found.</td>
                     </tr>
                   ) : (
                     reviews.map((review) => {
                       const hasImages = (review.image_urls && review.image_urls.length > 0) || review.image;
                       // Handle ID display safely if it's a long UUID
                       const displayId = typeof review.id === 'string' ? review.id.substring(0, 6) + '...' : review.id;
                       
                       return (
                         <tr key={review.id} className="hover:bg-gray-50 transition-colors">
                           <td className="p-4 border-b border-gray-100 text-center text-gray-400 font-mono text-xs" title={String(review.id)}>
                             {displayId}
                           </td>
                           <td className="p-4 border-b border-gray-100 font-medium">
                             <div className="flex items-center">
                               {review.title}
                               {hasImages && <ImageIcon size={14} className="ml-2 text-gray-400" />}
                               {review.image_urls && review.image_urls.length > 1 && (
                                  <span className="text-[10px] text-gray-400 ml-1 bg-gray-100 px-1 rounded">+{review.image_urls.length - 1}</span>
                               )}
                             </div>
                           </td>
                           <td className="p-4 border-b border-gray-100 text-gray-600">{review.client_name}</td>
                           <td className="p-4 border-b border-gray-100 text-gray-400">{formatDate(review.created_at)}</td>
                           <td className="p-4 border-b border-gray-100 text-yellow-500">{'★'.repeat(review.rating)}</td>
                           <td className="p-4 border-b border-gray-100 text-center">
                             <div className="flex items-center justify-center space-x-2">
                               <button 
                                 onClick={() => startEdit(review)}
                                 className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                 title="Edit"
                               >
                                 <Edit size={16} />
                               </button>
                               <button 
                                 onClick={() => handleDelete(review.id)}
                                 className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                                 title="Delete"
                               >
                                 <Trash2 size={16} />
                               </button>
                             </div>
                           </td>
                         </tr>
                       );
                     })
                   )}
                 </tbody>
               </table>
             </div>
           )}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;