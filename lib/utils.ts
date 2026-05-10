export function isAllowedEmail(email: string): boolean {
  return email.endsWith("@sunrint.hs.kr");
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}