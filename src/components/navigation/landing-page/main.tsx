"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import img_1_light from "../../../../public/images/img-1-light.png";
import img_1_dark from "../../../../public/images/img-1-dark.png";
import { useTheme } from "next-themes";

function Main() {
  const router = useRouter();
  const session = useSession();
  const { theme } = useTheme();

  useEffect(() => {
    // Check if the user is logged in (replace this condition with your authentication logic)
    const isLoggedIn = session && session.status === "authenticated";

    if (isLoggedIn) {
      router.push("/tasks");
    }
  }, [session, router]);

  return (
    <div className="w-screen min-h-screen pt-[10vh]">
      <div className="max-w-screen-xl mx-auto h-full p-5 ">
        <div className="w-full">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Get more done with Hive.
          </h1>
          <p className="w-full md:max-w-[55%] text-neutral-500 mt-3">
            Discover a convenient way to boost your income swiftly! Join Hive,
            engage in tasks, and watch your pockets fill up with extra cash!
          </p>
          <div className="my-5">
            <Link href={`/sign-up`}>
              <Button className="rounded-full">Get Started</Button>
            </Link>
          </div>
          <Image
            src={theme === "light" ? img_1_light : img_1_dark}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
