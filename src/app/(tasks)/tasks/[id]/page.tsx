import BackButton from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

function Page() {
  return (
    <div className="max-w-2xl mx-auto min-h-screen">
      <div className="my-5">
        <BackButton />
      </div>
      <div>
        <h2 className="text-3xl font-semibold">
          Design a landing page for our new product launch
        </h2>
        <p className="text-[#a3a3a3] text-sm mt-2">
          22 February 2024 | Tech | Offering Price: GHC 500
        </p>
      </div>
      <Separator className="my-5" />
      <div>
        <h2 className="text-xl font-semibold">Task Description</h2>
        <p className="text-[#a3a3a3] text-m mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit odit qui
          sequi fugit, eos atque optio quaerat in voluptatum odio iure sapiente
          explicabo temporibus blanditiis, repellat aliquam nemo quam tempore
          velit natus. Commodi dignissimos qui et dolorem expedita pariatur non
          iure velit tempore aliquid totam ab beatae, animi, eveniet quo?
        </p>
      </div>
      <br />
      <div className="flex justify-end">
        <Button>Apply</Button>
      </div>
    </div>
  );
}

export default Page;
