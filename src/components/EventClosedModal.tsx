"use client";

import { useState } from "react";
import { useEventClosed } from "@/src/hooks/useEventClosed";

export default function EventClosedModal() {
  const closed = useEventClosed();
  const [dismissed, setDismissed] = useState(false);

  if (!closed || dismissed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-cream-50">
      <div
        className="relative bg-white rounded-3xl shadow-letter-hover px-8 py-10 max-w-sm w-full flex flex-col items-center gap-4 text-center animate-[fadeUp_0.5s_ease_forwards]"
        style={{ opacity: 0 }}
      >
        <button
          onClick={() => setDismissed(true)}
          aria-label="닫기"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-ink-faint hover:text-ink hover:bg-cream-dark transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="space-y-2">
          <p className="font-handwriting text-ink-faint text-base">2026 스승의 날</p>
          <h2 className="font-display text-2xl font-bold text-ink leading-tight">
            이벤트가 마감되었습니다
          </h2>
          <p className="font-body text-ink-light text-sm leading-relaxed">
            편지 접수가 종료되었어요.<br />
            참여해주신 모든 학생 여러분 감사합니다
          </p>
        </div>

        <div className="mt-2 w-full border-t border-cream-dark pt-4">
          <p className="font-body text-ink-faint text-xs">
            선생님들께 마음이 잘 전달되길 바랍니다.
          </p>
        </div>
      </div>
    </div>
  );
}