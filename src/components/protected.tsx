"use client";
import { useRouter } from "next/navigation";
import usePersonal from "@/zustand/personal";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
   const router = useRouter();

   const { name, hasHydrated } = usePersonal(
      useShallow((state) => ({
         name: state.name,
         hasHydrated: state.hasHydrated,
      })),
   );

   useEffect(() => {
      if (!hasHydrated) return;

      console.log("Hello");
      console.log(name);
   }, [name, hasHydrated, router]);

   if (!hasHydrated) return null;

   return <>{children}</>;
};

export default ProtectedRoute;
