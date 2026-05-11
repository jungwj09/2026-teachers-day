import LetterForm from "@/components/LetterForm";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";

export default async function LetterPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/");

  return (
    <>
      <LetterForm />
      <Footer />
    </>
  );
}