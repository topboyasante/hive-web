"use client";
import { UserProfileDropdown } from "@/components/ui/user-profile-dropdown";
import Logo from "../../ui/logo";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-screen h-[7vh] fixed top-0 bg-background">
      <div className="max-w-screen-xl mx-auto h-full p-5 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center gap-5 bg-[#f5f5f5] dark:bg-[#121212] px-5 py-1 rounded-full">
          <Link href={`/tasks/create`} className="text-sm">
            Create Task
          </Link>
          <UserProfileDropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
