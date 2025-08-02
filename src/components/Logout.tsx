"use client";
import { ArrowLeft } from "lucide-react";

import Link from "next/link";


export default function Logout() {
  
  
  return (
    <>
      <Link
        role="button"
        href={"#"}
        className="bg-card w-fit px-5 rounded-md py-2 flex items-center justify-center gap-2"
        prefetch={false}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="">Déconnexion</span>
      </Link>
    </>
  );
}
