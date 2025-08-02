import GoogleLogin from "@/components/Google-login";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@radix-ui/react-label";

export default async function Register({}: {}) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Créer un nouveau compte</CardTitle>
            <CardDescription className="text-sm">
              Entrez une adresse valide pour créer un compte et recevez un lien
              pour activer votre compte.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="nom">Nom complet</Label>
                  <Input
                    id="nom"
                    type="text"
                    name="name"
                    placeholder="ex: Fofana aboubakar"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  S'inscrire
                </Button>
              </div>
            </form>
            <div className="mt-6 flex flex-col gap-8">
              <Separator />
              <GoogleLogin />
              <div className="mt-4 text-center text-sm">
                Déja un compte?{" "}
                <a href="/" className="underline underline-offset-4">
                  Se connecter
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
