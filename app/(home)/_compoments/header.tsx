"use client";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
const Header = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className=" max-w-3xl space-y-4">
      <h1 className=" text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents,& Plans. Unified. Welcome to
        <span className=" underline">Zwnote</span>
      </h1>
      <h3 className=" text-base sm:text-xl md:text-2xl font-medium">
        zwnote is the connected workspace where <br />
        batter ,faster work happens
      </h3>
      {isLoading && (
        <div className="w-full flex justify-center items-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href={"/documents"}>
            Enter zwnote <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button asChild><div className=" cursor-pointer">Try it now <ArrowRight className="h-4 w-4 ml-2" /></div></Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Header;
