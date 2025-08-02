"use client";

import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
import { ArrowLeft } from "lucide-react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("onAuthStateChange", event);
      if (event === "SIGNED_OUT") {
        router.push("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [router, supabase.auth]);

  return (
    <>
      <Link
        role="button"
        href={"/auth/logout"}
        className="bg-card w-fit px-5 rounded-md py-2 flex items-center justify-center gap-2"
        onClick={(event) => {
          event.preventDefault();
          supabase.auth.signOut();
        }}
        prefetch={false}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="">Déconnexion</span>
      </Link>
    </>
  );
}
