import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream-50 px-4 py-12">
      <div className="max-w-2xl mx-auto">

        <div className="flex items-center gap-3 mb-10 animate-[fadeUp_0.5s_ease_forwards]" style={{ opacity: 0 }}>
          <Link href="/" className="shrink-0">
            <Image src="/carnation.svg" alt="홈으로" width={36} height={44} className="w-9 h-11 opacity-80 hover:opacity-100 transition-opacity" />
          </Link>
          <div>
            <p className="font-handwriting text-ink-faint text-sm">2026 스승의 날</p>
            <h1 className="font-display text-xl font-bold text-ink">개인정보 처리방침</h1>
          </div>
        </div>

        <div className="bg-cream-100 rounded-2xl shadow-letter px-6 py-8 md:px-10 space-y-8 animate-[fadeUp_0.6s_0.1s_ease_both]" style={{ opacity: 0 }}>

          <Section title="1. 수집하는 개인정보 항목">
            <p>본 서비스는 Google OAuth 인증을 통해 다음 항목을 수집합니다.</p>
            <ul className="list-disc list-inside space-y-1 text-ink-light mt-2">
              <li>이름 (Google 계정 표시 이름)</li>
              <li>이메일 주소 (@sunrint.hs.kr)</li>
            </ul>
            <p className="mt-2">
              수집된 정보는 편지 작성자 식별 및 편지 전달 목적으로만 사용됩니다.
            </p>
          </Section>

          <Divider />

          <Section title="2. 개인정보의 수집 및 이용 목적">
            <ul className="list-disc list-inside space-y-1 text-ink-light">
              <li>선린인터넷고등학교 재학생 여부 확인</li>
              <li>편지 발신자 정보 기록 및 선생님께 전달</li>
              <li>중복 제출 방지 및 서비스 운영</li>
            </ul>
          </Section>

          <Divider />

          <Section title="3. 개인정보의 보유 및 이용 기간">
            <p>
              수집된 개인정보는 <strong className="text-ink font-semibold">2026년 스승의 날 행사 종료 후 30일 이내</strong>에 파기합니다.
              단, 관계 법령에 의해 보존이 필요한 경우 해당 법령에 따릅니다.
            </p>
          </Section>

          <Divider />

          <Section title="4. 개인정보의 제3자 제공">
            <p>
              작성된 편지 내용 및 발신자 이름은 수신 선생님께 전달될 수 있습니다.
              그 외 개인정보는 원칙적으로 제3자에게 제공하지 않으며,
              법령에 의한 요청이 있는 경우에 한해 예외적으로 제공될 수 있습니다.
            </p>
          </Section>

          <Divider />

          <Section title="5. 개인정보 처리의 위탁">
            <p>
              본 서비스는 원활한 운영을 위해 아래와 같이 개인정보 처리를 위탁합니다.
            </p>
            <div className="mt-3 rounded-xl border border-cream-dark overflow-hidden text-sm">
              <div className="grid grid-cols-2 bg-cream-dark font-display font-semibold text-ink px-4 py-2">
                <span>수탁업체</span><span>위탁 업무</span>
              </div>
              <div className="grid grid-cols-2 px-4 py-2 text-ink-light">
                <span>Supabase Inc.</span><span>데이터베이스 및 인증 처리</span>
              </div>
              <div className="grid grid-cols-2 px-4 py-2 text-ink-light border-t border-cream-dark">
                <span>Google LLC</span><span>OAuth 인증 서비스 제공</span>
              </div>
            </div>
          </Section>

          <Divider />

          <Section title="6. 정보주체의 권리">
            <p>이용자는 다음과 같은 권리를 행사할 수 있습니다.</p>
            <ul className="list-disc list-inside space-y-1 text-ink-light mt-2">
              <li>개인정보 열람 요청</li>
              <li>개인정보 수정·삭제 요청</li>
              <li>개인정보 처리 정지 요청</li>
            </ul>
            <p className="mt-2">
              권리 행사 및 문의는 학생회 담당자에게 연락해 주세요.
            </p>
          </Section>

          <Divider />

          <Section title="7. 시행일">
            <p>본 방침은 <strong className="text-ink font-semibold">2026년 5월 1일</strong>부터 시행됩니다.</p>
          </Section>

        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="font-display text-sm text-ink-faint underline underline-offset-4 hover:text-ink transition-colors"
          >
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="font-display font-bold text-ink text-base">{title}</h2>
      <div className="font-body text-ink-light text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function Divider() {
  return <div className="border-t border-cream-dark" />;
}