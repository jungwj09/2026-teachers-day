export function isAllowedEmail(email: string): boolean {
  return email.endsWith("@sunrint.hs.kr");
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

// 한국시간(KST = UTC+9) 기준 이벤트 마감 여부
// 마감: 2026-05-15 15:00 KST = 2026-05-15 06:00 UTC
const EVENT_CLOSE_UTC = new Date("2026-05-15T06:00:00Z");

export function isEventClosed(): boolean {
  return new Date() >= EVENT_CLOSE_UTC;
}

export { EVENT_CLOSE_UTC };