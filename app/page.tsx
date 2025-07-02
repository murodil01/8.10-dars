"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p className="text-center mt-20">Yuklanmoqda...</p>;
  }

  if (status === "authenticated") {
    return (
      <div className="text-center mt-20">
        <h1>Xush kelibsiz, {session.user?.name}</h1>
      </div>
    );
  }

  return null;
}
