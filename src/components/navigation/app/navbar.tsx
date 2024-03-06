"use client";
import { UserProfileDropdown } from "@/components/ui/user-profile-dropdown";
import Logo from "../../ui/logo";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <nav className="w-screen h-[7vh] fixed z-[50] top-0 bg-background border-b">
      <div className="max-w-screen-xl mx-auto h-full p-5 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex justify-end items-center gap-5 w-3/4">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="What service are you looking for today?" />
            <Button type="submit">Search</Button>
          </div>
          <Link href={`/tasks/create`} className="text-sm text-nowrap">
            Create Task
          </Link>
          <UserProfileDropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
