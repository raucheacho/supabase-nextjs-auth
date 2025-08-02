import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ type: string; email: string }>;
}) {
  const { type } = await searchParams;
  const { email } = await searchParams;
  const listErrors = [
    "login-failed",
    "invalid_magiclink",
    "magiclink",
    "recovery",
    "fileds_empty",
    "register_mail_exists",
    "register_unknown",
  ];

  return (
    <div className="text-center flex flex-col items-center justify-center min-h-screen space-y-4">
      <Card>
        <CardContent>
          <h1 className="text-2xl font-semibold text-center mb-2">Erreur</h1>

          {type === "login-failed" && (
            <strong>Échec de la connexion. Veuillez réessayer.</strong>
          )}

          {type === "invalid_magiclink" && (
            <strong>
              Le lien magique est invalide. Peut-être a-t-il expiré ? Veuillez
              en demander un nouveau.
            </strong>
          )}

          {type === "magiclink" && (
            <strong>
              Impossible d’envoyer le lien magique. Vérifiez que votre adresse
              e-mail est correcte.
            </strong>
          )}

          {type === "recovery" && (
            <strong>
              Impossible de demander un nouveau mot de passe. Vérifiez que votre
              adresse e-mail est correcte.
            </strong>
          )}

          {!listErrors.includes(type) && (
            <strong>
              Une erreur est survenue. Veuillez réessayer ou contacter le
              support.
            </strong>
          )}

          {type === "fields_empty" && (
            <strong>
              Vous n’êtes pas autorisé à créer un compte avec des champs vides.
              Veuillez remplir tous les champs.
            </strong>
          )}

          {type === "register_mail_exists" && (
            <strong>
              Un compte est déjà enregistré avec l’adresse&nbsp;
              <u>{email}</u>.
            </strong>
          )}

          {type === "register_unknown" && (
            <strong>
              Une erreur inconnue est survenue lors de la création du compte.
            </strong>
          )}
        </CardContent>
      </Card>

      <Link
        role="button"
        href={"/"}
        className="bg-card w-fit px-4 rounded-md py-2 flex items-center justify-center gap-2"
      >
        <ArrowLeft />
        <span>Retour à l’accueil</span>
      </Link>
    </div>
  );
}
