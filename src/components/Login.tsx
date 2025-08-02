"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FORM_TYPES } from "@/constants/formTypes";
import { cn } from "@/lib/utils";
import { Lock, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import GoogleLogin from "./Google-login";
import { Separator } from "./ui/separator";

type TypeProps = {
  formType: string;
  className?: string;
};

export const Login = ({ formType = "pw-login", className }: TypeProps) => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const isPasswordRecovery = formType === FORM_TYPES.PASSWORD_RECOVERY;
  const isPasswordLogin = formType === FORM_TYPES.PASSWORD_LOGIN;
  const isMagicLinkLogin = formType === FORM_TYPES.MAGIC_LINK;
  const loginBasePath = "/";

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Connectez-vous</CardTitle>
          <CardDescription>
            Entrez votre e-mail ci-dessous pour vous connecter à votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  ref={emailInputRef}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              {isPasswordRecovery && (
                <input type="hidden" name="type" value="recovery" />
              )}
              {isPasswordLogin && (
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    {!isPasswordRecovery && (
                      <Link
                        href={{
                          pathname: loginBasePath,
                          query: { passwordRecovery: "yes" },
                        }}
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Mot de passe oublié ?
                      </Link>
                    )}
                  </div>
                  <Input
                    ref={passwordInputRef}
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Votre mot de passe"
                    required
                  />
                </div>
              )}

              <Button type="submit" className="w-full cursor-pointer">
                {isPasswordLogin && "Connexion avec mot de passe"}
                {isPasswordRecovery && "Demander un nouveau mot de passe"}
                {isMagicLinkLogin && "Connexion avec lien magique"}
              </Button>
            </div>
          </form>
          <div className="mt-6 flex flex-col gap-8">
            <Separator />
            <GoogleLogin />
            <div className="mt-4 text-center text-sm">
              Pas encore de compte?{" "}
              <Link href="/register" className="underline underline-offset-4">
                Créer un compte
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-sm text-center space-y-2 flex flex-col">
        {!isPasswordLogin && (
          <Link
            href={{ pathname: loginBasePath, query: { magicLink: "no" } }}
            className="bg-card  w-full rounded-md py-2 flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            <span>Connexion par mot de passe</span>
          </Link>
        )}

        {!isMagicLinkLogin && (
          <Link
            href={{
              pathname: loginBasePath,
              query: { magicLink: "yes" },
            }}
            className="bg-card w-full rounded-md py-2 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Connexion par lien magique</span>
          </Link>
        )}
      </div>
    </div>
  );
};
