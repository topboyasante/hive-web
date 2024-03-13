"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import React from "react";

function Greeting() {
  const session = useSession();
  return (
    <div>
      <div>
        {session.data?.user.username && (
          <div>
            <div>
              <h2>Hello, {session.data?.user.username}.</h2>
              <br />
              <div className="flex md:hidden w-full max-w-sm items-center space-x-2">
                <Input
                  type="text"
                  placeholder="What service are you looking for today?"
                />
                <Button type="submit">Search</Button>
              </div>
            </div>
            <hr className="mt-5" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Greeting;
