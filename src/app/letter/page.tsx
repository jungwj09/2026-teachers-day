import LetterForm from "@/src/components/LetterForm";
import { createClient } from "@/src/lib/supabase/server";
import { redirect } from "next/navigation";
import Footer from "@/src/components/Footer";

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