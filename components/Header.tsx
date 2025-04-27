"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { useSidebar } from "./ui/sidebar";

function Header() {
  const { user } = useUser();
  const { toggleSidebar, open, isMobile } = useSidebar();

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      {/* Left side */}
      <div className="flex items-center gap-2">
        <MenuIcon className="w-6 h-6" onClick={toggleSidebar} />
        <Image
          src="/images/logo.png"
          alt="logo"
          width={150}
          height={150}
          className="hidden md:block"
        />
        <Image
          src="/images/logo-2.png"
          alt="logo"
          width={40}
          height={40}
          className="md:hidden"
        />
      </div>

      {/* Right Side */}
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button asChild variant="outline">
            <SignInButton mode="modal" />
          </Button>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
