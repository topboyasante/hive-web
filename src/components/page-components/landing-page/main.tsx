"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Hero from "./hero";

function Main() {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    // Check if the user is logged in (replace this condition with your authentication logic)
    const isLoggedIn = session && session.status === "authenticated";

    if (isLoggedIn) {
      router.push("/tasks");
    }
  }, [session, router]);

  return (
    <div className="w-screen min-h-screen pt-[10vh]">
      <div className="max-w-screen-xl mx-auto p-5 h-full">
        <div className="w-full">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default Main;
