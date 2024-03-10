"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import img_1_light from "../../../../public/images/img-1-light.png";
import img_1_dark from "../../../../public/images/img-1-dark.png";
import { useTheme } from "next-themes";

function Hero() {
  const { theme } = useTheme();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center">
      <h1>
        Get more done with <span className="dark:text-primary ">Hive.</span>
      </h1>
      <p className="w-full md:max-w-[70%] text-neutral-500 mt-">
        Discover a convenient way to boost your income swiftly! Join Hive,
        engage in tasks, and watch your pockets fill up with extra cash!
      </p>
      <div className="my-5">
        <Link href={`/sign-up`}>
          <Button className="rounded-full">Get Started</Button>
        </Link>
      </div>
      <br />
      <Image
        src={theme === "light" ? img_1_light : img_1_dark}
        alt="hero-image"
        className="border rounded-md"
      />
    </div>
  );
}

export default Hero;
