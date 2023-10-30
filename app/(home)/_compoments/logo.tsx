import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const Logo = ({ isHeading = false }: { isHeading?: boolean }) => {
  console.log(isHeading === true);
  return (
    <div
      className={` items-center gap-x-2 flex-nowrap ${
        isHeading === false ? "hidden" : "flex"
      }`}
    >
      <Image src="/redrock.png" height="20" width="20" alt="logo" />
      <p className={cn("font-semibold", font.className)}>zwNote</p>
    </div>
  );
};

export default Logo;
