import Logout from "@/components/Logout";

export default async function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">
          Bienvenue à Supabase Next.js Auth
        </h1>
        <p className="text-lg">
          Ceci est un exemple d'authentification simple utilisant Supabase avec
          next.js.
        </p>

        <div className="mt-4 text-center sm:text-left">
          <p className="text-xl font-medium">Connecté en tant que :</p>
          <p className="text-lg">
            <span className="font-semibold">Nom :</span> votre nom
          </p>
          <p className="text-lg">
            <span className="font-semibold">Email :</span> votre email
          </p>
        </div>

        <Logout />

        <p className="text-gray-500">Aucun utilisateur connecté.</p>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
        >
          Fait avec le <span>❤️</span> par <span className="">Rauche Acho</span>
        </a>
      </footer>
    </div>
  );
}
