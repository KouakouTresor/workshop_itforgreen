"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/api-service";
import { useUser } from "@/store/user";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm = ({ className }: UserAuthFormProps) => {
  const router = useRouter();
  const { setUser } = useUser();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const initUser = async () => {
    try {
      const req = await useAuth.getMe();
      if (!req?.data) {
        toast.error(req?.response?.data?.message || "Une erreur est survenue");
        return;
      }
      setUser(req.data.data);
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  const authentification = async () => {
    router.push("/")
    try {
      const req = await useAuth.login({
        email: login,
        password,
      });
      if (!req.data) {
        toast.error(req?.response?.data?.message || "Une erreur est survenue");
        return;
      }

      if (req.data.type === "Success") {
        toast.success("Connexion réussie !");
        window.localStorage.setItem("token", req.data.data);
        initUser();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddKeyboard = (key: string) => {
    if (key === "Enter") {
      authentification();
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <div className="my-2">
            <Label htmlFor="email" className="mb-2">
              Adresse email
            </Label>
            <Input
              id="email"
              value={login}
              onChange={(e: any) => setLogin(e.target.value)}
              className="w-full"
              placeholder="example@company.com"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="password" className="mb-2">
              Mot de passe
            </Label>
            <Input
              id="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              className="w-full"
              placeholder="********"
            />
          </div>
          <Button
            className="w-full mt-6 text-white bg-primary"
            onClick={authentification}
          >
            Se connecter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserAuthForm;
