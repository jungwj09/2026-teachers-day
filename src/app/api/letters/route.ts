import { createClient } from "@/src/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { teacher_name, content } = body;

  if (!teacher_name?.trim() || !content?.trim()) {
    return NextResponse.json(
      { error: "선생님 이름과 편지 내용을 입력해주세요." },
      { status: 400 }
    );
  }

  const { data, error } = await supabase.from("letters").insert({
    teacher_name: teacher_name.trim(),
    sender_name: user.user_metadata?.full_name || user.email?.split('@')[0] || '알 수 없음',
    sender_email: user.email,
    content: content.trim(),
  });

  if (error) {
    console.error("편지 저장 오류:", error);
    return NextResponse.json({ error: "편지 저장에 실패했습니다." }, { status: 500 });
  }

  return NextResponse.json({ success: true, data }, { status: 201 });
}