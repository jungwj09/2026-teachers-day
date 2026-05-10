import LoginButton from "@/components/LoginButton";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: Promise<{ error?: string }>;
}

export default async function HomePage({ searchParams }: PageProps) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // 이미 로그인됐으면 편지 작성 페이지로
  if (user) redirect("/letter");

  const { error } = await searchParams;

  return (
    <main className="min-h-screen bg-cream-50 flex flex-col items-center justify-center px-4 relative overflow-hidden">

      
      <div className="absolute top-1/4 -right-24 w-64 h-64 bg-carnation-soft rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-64 h-64 bg-cream-200 rounded-full opacity-50 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg w-full">

        <div
          className="animate-[fadeUp_0.6s_ease_forwards] mb-2"
          style={{ opacity: 0 }}
        >
          <Image
            src="/carnation.svg"
            alt="카네이션"
            width={112}
            height={144}
            className="w-28 h-36 mx-auto animate-float"
            loading="eager"
            priority
          />
        </div>

        <div
          className="animate-[fadeUp_0.6s_0.1s_ease_both] mb-2 inline-block"
          style={{ opacity: 0 }}
        >
          <p className="font-handwriting text-ink-faint text-2xl bg-cream-200 px-4 py-1 rounded-full">
            5월 15일 스승의 날
          </p>
        </div>

        <div
          className="animate-[fadeUp_0.6s_0.2s_ease_both] mb-2"
          style={{ opacity: 0 }}
        >
          <h1 className="font-display text-4xl font-medium text-ink leading-tight">
            선생님께<br />
            <span className="text-carnation font-semibold">감사의 마음</span>을<br />
            전해보세요
          </h1>
        </div>

        <div
          className="animate-[fadeUp_0.6s_0.3s_ease_both] mb-6"
          style={{ opacity: 0 }}
        >
          <p className="font-body text-ink-light text-base leading-relaxed">
            스승의 날을 맞아, 우리를 가르쳐주신 선생님들께<br />
            감사의 마음을 담은 편지를 전해보세요.
          </p>
        </div>

        <div
          className="animate-[fadeUp_0.6s_0.4s_ease_both]"
          style={{ opacity: 0 }}
        >
          <LoginButton errorMessage={error} />
        </div>
      </div>
    </main>
  );
}