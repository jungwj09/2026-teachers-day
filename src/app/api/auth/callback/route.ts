import { createClient } from "@/src/lib/supabase/server";
import { isAllowedEmail } from "@/src/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${origin}/?error=no_code`);
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error || !data.user?.email) {
    return NextResponse.redirect(`${origin}/?error=auth_failed`);
  }

  // sunrint.hs.kr 도메인 검증
  if (!isAllowedEmail(data.user.email)) {
    await supabase.auth.signOut();
    return NextResponse.redirect(`${origin}/?error=invalid_domain`);
  }

  return NextResponse.redirect(`${origin}/letter`);
}