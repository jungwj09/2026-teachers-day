"use client";

import Image from "next/image";
import { useUser } from "@/hooks/useUser";
import { useState, useRef, useEffect } from "react";

const LINE_HEIGHT = 42;
const DEFAULT_LINES = 8;

export default function LetterForm() {
  const { user } = useUser();

  const [teacherName, setTeacherName] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [lineCount, setLineCount] = useState(DEFAULT_LINES);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const rulerRef = useRef<HTMLSpanElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // 입력에 따라 줄 수 동적 계산
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    // height를 auto로 줄였다가 scrollHeight로 실제 필요한 높이 측정
    el.style.height = "auto";
    const neededLines = Math.ceil(el.scrollHeight / LINE_HEIGHT);
    const newLineCount = Math.max(DEFAULT_LINES, neededLines);
    setLineCount(newLineCount);
    el.style.height = `${newLineCount * LINE_HEIGHT}px`;
  }, [content]);

  // input 너비를 내용 or placeholder에 맞춰 동적으로 조절
  useEffect(() => {
    const ruler = rulerRef.current;
    const input = inputRef.current;
    if (!ruler || !input) return;

    if (teacherName.length === 0) {
      // placeholder 스타일을 ruler에 적용하여 정확한 너비 측정
      ruler.style.fontFamily = "var(--font-handwriting)";
      ruler.style.fontWeight = "normal";
      ruler.style.fontSize = "1.125rem";
      ruler.textContent = "선생님 성함을 입력하세요";
    } else {
      // 실제 입력된 텍스트 스타일을 ruler에 적용
      ruler.style.fontFamily = "var(--font-display)";
      ruler.style.fontWeight = "500";
      ruler.style.fontSize = "1.125rem";
      ruler.textContent = teacherName;
    }

    input.style.width = `${ruler.offsetWidth + 4}px`;
  }, [teacherName]);

  const handleSubmit = async () => {
    if (!teacherName.trim() || !content.trim()) {
      setErrorMsg("선생님 이름과 편지 내용을 입력해주세요.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/letters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teacher_name: teacherName, content }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "오류가 발생했습니다.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "오류가 발생했습니다.");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4">
        <div className="text-center animate-[fadeUp_0.6s_ease_forwards]">
          <Image src="/carnation.svg" alt="카네이션" width={128} height={160}
            className="w-32 h-40 mx-auto mb-6 animate-float" loading="eager" priority />
          <h2 className="font-display text-3xl text-ink font-bold mb-3">편지가 전달되었어요</h2>
          <p className="font-body text-ink-light mb-8">
            {teacherName} 선생님께 감사의 마음이 닿길 바랍니다.
          </p>
          <button
            onClick={() => { setTeacherName(""); setContent(""); setStatus("idle"); setLineCount(DEFAULT_LINES); }}
            className="font-display text-sm text-ink-faint underline underline-offset-4 hover:text-ink transition-colors"
          >
            다른 선생님께도 편지 쓰기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4 py-12">
      <span
        ref={rulerRef}
        aria-hidden="true"
        style={{
          position: "absolute", visibility: "hidden", whiteSpace: "pre",
          fontFamily: "var(--font-display)", fontSize: "1.125rem", fontWeight: 500,
          pointerEvents: "none",
        }}
      />

      <div className="w-full max-w-2xl">
        <div className="flex items-center gap-2 mb-8 animate-[fadeUp_0.5s_ease_forwards]">
          <Image src="/carnation.svg" alt="카네이션" width={64} height={80}
            className="w-16 h-20 animate-float shrink-0" loading="eager" priority />
          <div>
            <p className="font-handwriting text-ink-faint text-lg">스승의 날</p>
            <h1 className="font-display text-2xl font-bold text-ink leading-tight">선생님께 편지 쓰기</h1>
          </div>
        </div>

        {/* 카드 전체가 늘어남 -> overflow-hidden 제거 */}
        <div className="relative bg-cream-100 rounded-2xl shadow-letter animate-[fadeUp_0.6s_0.1s_ease_both]">
          <div className="px-4 pb-4 pt-4 md:px-8 md:pb-8 md:pt-6 space-y-4">

            <div>
              <label className="font-handwriting text-ink-faint text-sm block mb-1">받는 분</label>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-semibold text-ink text-lg shrink-0">TO.</span>
                <div className="inline-flex items-baseline pb-1" style={{ borderBottom: "1px solid #c0392b" }}>
                  <input
                    ref={inputRef}
                    type="text"
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                    placeholder="선생님 성함을 입력하세요"
                    maxLength={20}
                    style={{ minWidth: 0 }}
                    className="bg-transparent font-display text-lg font-medium text-ink focus:outline-none transition-colors duration-200 placeholder:text-ink-faint placeholder:font-handwriting placeholder:font-normal placeholder:text-lg"
                  />
                  {teacherName.length > 0 && (
                    <span className="font-display text-lg font-medium text-ink ml-0.5 shrink-0">선생님</span>
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="relative w-full" style={{ height: lineCount * LINE_HEIGHT }}>
                <div className="absolute inset-0 pointer-events-none z-0 flex flex-col">
                  {Array.from({ length: lineCount }).map((_, i) => (
                    <div
                      key={i}
                      className="w-full shrink-0"
                      style={{ height: LINE_HEIGHT, borderBottom: "1px solid rgba(0,0,0,0.18)" }}
                    />
                  ))}
                </div>

                {/* textarea: overflow hidden, 높이 고정 */}
                <textarea
                  ref={textareaRef}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder={"선생님께 전하고 싶은 말을 자유롭게 적어보세요.\n감사했던 순간, 기억에 남는 말 한마디,\n앞으로의 바람 등 무엇이든 좋아요 :)"}
                  maxLength={1000}
                  className="relative z-10 w-full h-full bg-transparent resize-none focus:outline-none overflow-hidden font-handwriting text-ink"
                  style={{ lineHeight: `${LINE_HEIGHT}px`, paddingTop: 0 }}
                />
              </div>
              <p className="text-right font-body text-ink-faint text-xs mt-1">{content.length} / 1000</p>
            </div>

            <div className="border-t border-cream-300" />

            <div>
              <label className="font-handwriting text-ink-faint text-sm block mb-1">보내는 분</label>
              <div className="flex items-center gap-2">
                <span className="font-display font-semibold text-ink text-base shrink-0">From.</span>
                <p className="font-display font-medium text-base md:text-lg text-ink pb-1">
                  {user?.user_metadata?.full_name || user?.email?.split('@')[0] || '알 수 없음'}
                </p>
              </div>
            </div>

            {(status === "error" || errorMsg) && (
              <p className="font-body text-carnation text-sm bg-carnation-soft rounded-lg px-4 py-2">{errorMsg}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="group w-full bg-ink text-cream-50 font-display font-bold text-lg py-3 rounded-xl shadow-letter transition-all duration-300 hover:shadow-letter-hover hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {status === "loading" ? (
                <><span className="dot-flashing"><span /><span /><span /></span><span>전송 중...</span></>
              ) : (
                <span className="text-cream text-sm">편지 보내기</span>
              )}
            </button>
          </div>
        </div>

        <p className="text-center font-body text-ink-faint text-xs mt-6">작성한 편지는 선생님들께 전달됩니다</p>
      </div>
    </div>
  );
}