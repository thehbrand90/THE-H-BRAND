import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowLeft, Loader2, Lock } from 'lucide-react';

const { useNavigate, Link } = ReactRouterDOM;

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      if (data.session) navigate('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || '로그인에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center px-5 py-32">
      <div className="w-full max-w-[420px]">
        <div className="bg-brand-paper border border-brand-line/70 p-8 md:p-10">
          <div className="flex items-center justify-between mb-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-dark/15 text-brand-ink">
              <Lock size={16} strokeWidth={1.5} />
            </span>
            <span className="font-montserrat text-[9px] tracking-[0.26em] text-brand-gray">
              ADMIN
            </span>
          </div>

          <h1 className="text-xl font-medium text-brand-ink mb-2">관리자 로그인</h1>
          <p className="text-[13px] font-light text-brand-gray mb-9">
            등록된 관리자 계정으로 접속해 주세요.
          </p>

          {error && (
            <div className="mb-6 border border-red-200 bg-red-50 text-red-700 text-[12.5px] px-4 py-3">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-montserrat text-[9px] tracking-[0.22em] text-brand-gray mb-2">
                EMAIL
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
                className="w-full bg-brand-bg border border-brand-line px-3 py-3 text-sm text-brand-ink focus:outline-none focus:border-brand-clay transition-colors"
                placeholder="admin@thehbrand.com"
              />
            </div>

            <div>
              <label className="block font-montserrat text-[9px] tracking-[0.22em] text-brand-gray mb-2">
                PASSWORD
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full bg-brand-bg border border-brand-line px-3 py-3 text-sm text-brand-ink focus:outline-none focus:border-brand-clay transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center bg-brand-dark text-white py-3.5 font-montserrat text-[10px] tracking-[0.24em] hover:bg-brand-clay transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 size={14} className="animate-spin" /> : 'LOGIN'}
            </button>
          </form>
        </div>

        <Link
          to="/"
          className="mt-6 inline-flex items-center font-montserrat text-[10px] tracking-[0.18em] text-brand-gray hover:text-brand-ink transition-colors"
        >
          <ArrowLeft size={12} className="mr-2" /> BACK TO SITE
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;
