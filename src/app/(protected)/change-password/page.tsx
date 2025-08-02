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
import { Label } from "@radix-ui/react-label";
import { useRef } from "react";

export default function ChangePasswordPage() {
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Réiniser votre mot de passe
            </CardTitle>
            <CardDescription className="text-sm">
              Entrez un qui contient au minmum 6 caractères.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="nom">Nouveau mot de passe</Label>
                  <Input
                    ref={passwordRef}
                    name="password"
                    type="password"
                    id="password"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  S'inscrire
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
