import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
export default function RegistrationSuccessPage({
  searchParams,
}: {
  searchParams: { type: string; email: string };
}) {
  const { email } = searchParams;

  return (
    <div className="flex flex-col min-h-svh w-full text-center items-center justify-center p-6 md:p-10 gap-8">
      <Card>
        <div className="w-full max-w-sm space-y-5">
          <h1 className="text-2xl font-bold">L'inscription a réussi!</h1>
          <p>Vérifiez votre e-mail ({email}) pour activer votre compte.</p>
        </div>
      </Card>
      <Link
        className="bg-card w-fit px-5 rounded-md py-2 flex items-center justify-center gap-2"
        role="button"
        href={"/"}
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Login</span>
      </Link>
    </div>
  );
}
