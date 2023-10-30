"use client";
import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/themeChangeButton";
const Navbar = () => {
  const scrolled = useScrollTop();
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
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
