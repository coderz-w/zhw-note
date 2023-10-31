"use client";
import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/themeChangeButton";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
const Navbar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className=" h-[8vh]">
      <div
        className={cn(
          "z-50 bg-background fixed top-0 flex items-center w-full p-6 dark:bg-[#1f1f1f] h-[8vh]",
          scrolled && " border-b shadow-sm ease-in-out"
        )}
      >
        <Logo isHeading={true} />
        <div className="md:ml-auto justify-end  w-full flex items-center gap-x-2">
          {isLoading && <Spinner></Spinner>}
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button variant={"ghost"} size={"sm"}>
                  Log in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button size={"sm"}>Try it now</Button>
              </SignInButton>
            </>
          )}
          {isAuthenticated && (
            <>
              <Button variant={"ghost"} size={"sm"} asChild>
                <Link href="/documents">Enter Your note</Link>
              </Button>
              <UserButton afterSignOutUrl="/"></UserButton>
            </>
          )}
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
