import Link from "next/link";
import Image from "next/image";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream-50 px-4 py-12">
      <div className="max-w-2xl mx-auto">

        <div className="flex items-center gap-3 mb-10 animate-[fadeUp_0.5s_ease_forwards]" style={{ opacity: 0 }}>
          <Link href="/" className="shrink-0">
            <Image src="/carnation.svg" alt="홈으로" width={36} height={44} className="w-9 h-11 opacity-80 hover:opacity-100 transition-opacity" />
          </Link>
          <div>
            <p className="font-handwriting text-ink-faint text-sm">2026 스승의 날</p>
            <h1 className="font-display text-xl font-bold text-ink">이용약관</h1>
          </div>
        </div>

        <div className="bg-cream-100 rounded-2xl shadow-letter px-6 py-8 md:px-10 space-y-8 animate-[fadeUp_0.6s_0.1s_ease_both]" style={{ opacity: 0 }}>

          <Section title="제1조 (목적)">
            <p>
              본 약관은 선린인터넷고등학교 제 120대 학생회 SPARK!가 운영하는
              &quot;2026 스승의 날&quot; 서비스(이하 &quot;서비스&quot;)의 이용에 관한 조건과 절차,
              이용자와 운영자의 권리·의무를 규정함을 목적으로 합니다.
            </p>
          </Section>

          <Divider />

          <Section title="제2조 (이용 자격)">
            <p>본 서비스는 다음 조건을 모두 충족하는 자만 이용할 수 있습니다.</p>
            <ul className="list-disc list-inside space-y-1 text-ink-light mt-2">
              <li>선린인터넷고등학교 재학생</li>
              <li>학교에서 발급한 <strong className="text-ink">@sunrint.hs.kr</strong> Google 계정 보유자</li>
              <li>본 약관에 동의한 자</li>
            </ul>
          </Section>

          <Divider />

          <Section title="제3조 (서비스 내용)">
            <p>본 서비스는 스승의 날을 맞아 학생이 선생님께 감사 편지를 작성·전달할 수 있는 기능을 제공합니다.</p>
            <ul className="list-disc list-inside space-y-1 text-ink-light mt-2">
              <li>Google OAuth를 통한 학생 인증</li>
              <li>선생님께 편지 작성 및 전달</li>
            </ul>
          </Section>

          <Divider />

          <Section title="제4조 (이용자 의무)">
            <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
            <ul className="list-disc list-inside space-y-1 text-ink-light mt-2">
              <li>타인의 계정을 이용하여 서비스에 접근하는 행위</li>
              <li>선생님 또는 타인을 비방·모욕하는 내용의 편지 작성</li>
              <li>허위 사실이 포함된 내용의 편지 작성</li>
              <li>서비스의 정상적인 운영을 방해하는 행위</li>
              <li>기타 법령 또는 학교 생활규정에 위반되는 행위</li>
            </ul>
          </Section>

          <Divider />

          <Section title="제5조 (편지 내용의 관리)">
            <p>
              운영자는 제4조를 위반한 편지 내용에 대해 사전 통보 없이 삭제하거나 전달을 보류할 수 있습니다.
              작성된 편지의 내용은 수신 선생님과 학생회 담당자가 확인할 수 있습니다.
            </p>
          </Section>

          <Divider />

          <Section title="제6조 (서비스 운영 기간)">
            <p>
              본 서비스는 <strong className="text-ink font-semibold">2026 스승의 날 행사 기간</strong>에 한해 운영되며,
              행사 종료 후 서비스 접근이 제한될 수 있습니다.
            </p>
          </Section>

          <Divider />

          <Section title="제7조 (책임의 한계)">
            <p>
              운영자는 이용자가 작성한 편지 내용에 대한 법적 책임을 지지 않습니다.
              서비스 이용으로 인해 발생하는 분쟁은 이용자 간 해결을 원칙으로 합니다.
              천재지변, 시스템 장애 등 불가항력적 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.
            </p>
          </Section>

          <Divider />

          <Section title="제8조 (약관의 변경)">
            <p>
              운영자는 필요한 경우 본 약관을 변경할 수 있으며,
              변경 시 서비스 내 공지를 통해 안내합니다.
            </p>
          </Section>

          <Divider />

          <Section title="부칙">
            <p>본 약관은 <strong className="text-ink font-semibold">2026년 5월 1일</strong>부터 시행합니다.</p>
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