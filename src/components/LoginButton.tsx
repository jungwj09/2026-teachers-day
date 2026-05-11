"use client";

import { createClient } from "@/src/lib/supabase/client";
import { useState } from "react";

interface Props {
  errorMessage?: string;
}

export default function LoginButton({ errorMessage }: Props) {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const supabase = createClient();

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
        queryParams: {
          hd: "sunrint.hs.kr",
          prompt: "select_account",
        },
      },
    });
  };

  const errorMap: Record<string, string> = {
    invalid_domain: "선린인터넷고등학교(@sunrint.hs.kr) 계정으로만 로그인 가능합니다.",
    auth_failed: "로그인에 실패했습니다. 다시 시도해주세요.",
    no_code: "인증 코드가 없습니다. 다시 시도해주세요.",
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {errorMessage && errorMap[errorMessage] && (
        <p className="text-carnation text-sm font-body bg-carnation-soft border border-carnation-light rounded-lg px-4 py-2">
          {errorMap[errorMessage]}
        </p>
      )}

      <button
        onClick={handleLogin}
        disabled={loading}
        className="
          group relative overflow-hidden
          bg-ink text-cream-50
          font-display font-bold
          px-8 py-4 rounded-2xl
          shadow-letter
          transition-all duration-300
          hover:shadow-letter-hover hover:-translate-y-0.5
          disabled:opacity-60 disabled:cursor-not-allowed
          whitespace-pre-line text-center leading-relaxed
        "
      >
        {loading ? (
          <span className="relative flex items-center gap-2 justify-center">
            <span className="dot-flashing">
              <span /><span /><span />
            </span>
            <span className="text-sm">로그인 중...</span>
          </span>
        ) : (
          <span className="relative flex items-center gap-3 justify-center text-sm font-medium text-cream">
            {/* Google icon */}
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {"학교 구글 계정으로 로그인하고\n선생님들께 편지 쓰러 가기"}
          </span>
        )}
      </button>

      <p className="text-ink-faint text-xs font-body">
        @sunrint.hs.kr 계정으로만 접속 가능합니다
      </p>
    </div>
  );
}