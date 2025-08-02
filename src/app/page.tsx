import { Login } from "@/components/Login";
import { FORM_TYPES } from "@/constants/formTypes";

type TypeProps = {
  searchParams: Promise<{ passwordRecovery: string; magicLink: string }>;
};

export default async function LoginPage({ searchParams }: TypeProps) {
  const wantsMagicLink = (await searchParams).magicLink === "yes";
  const wantsPasswordRecovery = (await searchParams).passwordRecovery === "yes";

  let formType = FORM_TYPES.PASSWORD_LOGIN;
  if (wantsMagicLink) {
    formType = FORM_TYPES.MAGIC_LINK;
  } else if (wantsPasswordRecovery) {
    formType = FORM_TYPES.PASSWORD_RECOVERY;
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Login formType={formType} />
      </div>
    </div>
  );
}
