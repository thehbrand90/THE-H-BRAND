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
  
  // Form State
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [form, setForm] = useState({
    title: '',
    author: '',
    content: '',
    rating: 5,
    image: '',
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
        .order('id', { ascending: false });

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
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setForm(prev => ({ ...prev, image: '' }));
  };

  const resetForm = () => {
    setForm({ title: '', author: '', content: '', rating: 5, image: '' });
    setIsEditing(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0];

    try {
      if (isEditing) {
        // Update
        const { error } = await supabase
          .from('reviews')
          .update({
            title: form.title,
            author: form.author,
            content: form.content,
            rating: Number(form.rating),
            image: form.image,
          })
          .eq('id', isEditing);

        if (error) throw error;
      } else {
        // Create
        const { error } = await supabase
          .from('reviews')
          .insert([{
            title: form.title,
            author: form.author,
            content: form.content,
            rating: Number(form.rating),
            image: form.image,
            date: currentDate,
          }]);

        if (error) throw error;
      }

      await fetchReviews();
      resetForm();
    } catch (error) {
      console.error('Error saving review:', error);
      alert('저장 중 오류가 발생했습니다.');
    }
  };

  const handleDelete = async (id: number) => {
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
    setForm({
      title: review.title,
      author: review.author,
      content: review.content,
      rating: review.rating,
      image: review.image || '',
    });
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">작성자 (Author)</label>
                <input 
                  type="text" 
                  name="author"
                  value={form.author} 
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
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">사진 첨부 (Photo)</label>
              <div className="flex items-center space-x-4">
                <label className="cursor-pointer bg-white border border-gray-300 px-4 py-2 hover:bg-gray-50 transition-colors flex items-center text-sm text-gray-600">
                  <ImageIcon size={16} className="mr-2" />
                  이미지 선택...
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
                {form.image && (
                  <div className="relative group">
                    <img src={form.image} alt="Preview" className="h-16 w-16 object-cover border border-gray-200" />
                    <button 
                      type="button" 
                      onClick={removeImage}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-sm hover:bg-red-600"
                    >
                      <XIcon size={12} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                type="submit" 
                className="bg-[#222625] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors flex items-center"
              >
                <Check size={16} className="mr-2" />
                {isEditing ? 'Update Review' : 'Create Review'}
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
                     <th className="p-4 border-b border-gray-200 w-16 text-center">ID</th>
                     <th className="p-4 border-b border-gray-200">Title</th>
                     <th className="p-4 border-b border-gray-200 w-32">Author</th>
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
                     reviews.map((review) => (
                       <tr key={review.id} className="hover:bg-gray-50 transition-colors">
                         <td className="p-4 border-b border-gray-100 text-center text-gray-400">{review.id}</td>
                         <td className="p-4 border-b border-gray-100 font-medium">
                           <div className="flex items-center">
                             {review.title}
                             {review.image && <ImageIcon size={14} className="ml-2 text-gray-400" />}
                           </div>
                         </td>
                         <td className="p-4 border-b border-gray-100 text-gray-600">{review.author}</td>
                         <td className="p-4 border-b border-gray-100 text-gray-400">{review.date}</td>
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
                     ))
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