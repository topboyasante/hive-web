"use client";
import { Button } from "@/components/ui/button";
import Logo from "../../ui/logo";
import { signOut, useSession } from "next-auth/react";

function Navbar() {
  const session = useSession()
  console.log(session)
  return (
    <nav className="w-screen h-[7vh] fixed top-0 bg-background">
      <div className="max-w-screen-xl mx-auto h-full p-5 flex justify-between items-center">
        <Logo />
        <Button
          onClick={() => signOut({ callbackUrl: "/sign-in", redirect: true })}
        >
          Search
        </Button>
        <div className="flex items-center gap-5"></div>
      </div>
    </nav>
  );
}

export default Navbar;
