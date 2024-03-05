import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div className="w-screen h-screen pt-[10vh]">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
