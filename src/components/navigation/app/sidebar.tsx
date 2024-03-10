"use client";

import Avatar from "boring-avatars";
import { useSession } from "next-auth/react";
import Link from "next/link";

function SideBar() {
  const session = useSession();
  return (
    <nav className="w-full h-full sticky top-0 left-0 overflow-y-scroll">
      {session.data?.user && (
        <div className="bg-[#f5f5f5] dark:bg-[#121212] rounded-xl w-full p-3">
          <div className="flex items-center gap-3">
            <Avatar
              size={40}
              name={session.data?.user.username}
              variant="beam"
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
            <div>
              {session.data?.user.first_name && (
                <p className="mt-0">{session.data?.user.first_name}</p>
              )}
              {session.data?.user.username && (
                <span className="mt-0 text-sm text-neutral-500">
                  @{session.data?.user.username}
                </span>
              )}
            </div>
          </div>
          <br />
          
          <div>
            <Link href={`/user/${session.data.user.id}`} className="underline text-sm underline-offset-4">View Profile</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default SideBar;
