import React from "react";
import { ModeToggle } from "../../ui/mode-toggle";
import Logo from "../../ui/logo";

function Footer() {
  return (
    <footer className="w-screen">
      <div className="max-w-screen-xl mx-auto  p-5">
        {/* Top */}
        <div className="w-full  flex justify-between items-center">
          <Logo />
        </div>
        <hr className="my-5 dark:border-neutral-700 border-dashed"/>
        <div className="w-full  flex justify-between items-center">
          <p className="text-sm">© 2024 Hive. All rights reserved.</p>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
