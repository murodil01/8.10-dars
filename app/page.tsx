"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bosh sahifa</h1>

      {session ? (
        <>
          <p>Xush kelibsiz, {session.user?.name}</p>
          <p>Email: {session.user?.email}</p>
          <img src={session.user?.image || ""} width={50} alt="avatar" />
          <br />
          <button onClick={() => signOut()}>Chiqish</button>
        </>
      ) : (
        <>
          <p>Foydalanuvchi tizimga kirmagan</p>
          <Link href="/login">
            <button>Kirish</button>
          </Link>
        </>
      )}
    </div>
  );
}
