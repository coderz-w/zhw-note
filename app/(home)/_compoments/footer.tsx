import Logo from "./logo";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return (
    <div className=" flex items-center w-full h-[10%] px-6 pt-12 bg-background z-50 dark:bg-[#1f1f1f]">
      <Logo />
      <div className="flex justify-between md:justify-end w-full text-muted-foreground gap-x-3 items-center">
        <Button size='sm' variant={'ghost'} className=" font-[600] ">Privacy Policy</Button>
        <Button size='sm' variant={'ghost'} className=" font-[600]">Terms of Service</Button>
      </div>
    </div>
  );
};

export default Footer;
