import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function MagicLinkSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ type: string }>;
}) {
  const { type } = await searchParams;
  const isRecovery = type === "recovery";

  return (
    <div className="flex flex-col min-h-svh w-full text-center items-center justify-center p-6 md:p-10 gap-8">
      <Card>
        <CardContent>
          <div className="w-full max-w-sm space-y-5">
            <h1 className="text-2xl font-bold">
              {isRecovery ? "Réinitialisation par " : "Connexion par "}
              Magic Link!
            </h1>

            {type === "recovery" ? (
              <p>
                Vérifiez votre e-mail pour voir le lien pour réinitialiser votre
                mot de passe.
              </p>
            ) : (
              <p>
                Vérifiez votre e-mail pour voir le lien pour vous connecter.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
      <Link
        className="bg-card w-fit px-5 rounded-md py-2 flex items-center justify-center gap-2"
        role="button"
        href={"/"}
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </Link>
    </div>
  );
}
