"use client"
import Link from "next/link";
import { UserAuthForm } from "@/components/organisms";

const AuthenticationPage = () => {
  return (
    <>
      <div className="container relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-screen flex-col p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 bg-local bg-center"
            style={{ backgroundImage: 'url("/auth-screen1.png")' }}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <img
              src="/logo-back-white.png"
              className="h-[50px] w-[50px] rounded-full mr-2"
            />
            Unieco Inc.
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg shadow-sm">
                Unieco est un plateforme qui permet de mettre en relation les
                différentes associations afin de mutualisé les ressources.
              </p>
              <footer className="text-sm">
                <Link
                  href="https://unieco.com"
                  className="underline underline-offset-4 hover:text-[#5d5d5d]"
                >
                  unieco.com
                </Link>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-semibold tracking-tight">
                Authentification
              </h1>
              <p className="text-sm text-muted-foreground">
                Entrez vos identifiants pour vous connecter à votre compte.
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Si vous avez un problème de connexion, veuillez contacter le{" "}
              <Link
                href="https://unieco.com/support"
                className="underline underline-offset-4 hover:text-[#5d5d5d]"
              >
                Support
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthenticationPage;
