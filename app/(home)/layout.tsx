import Navbar from "./_compoments/navibar";
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full box-border dark:bg-[#1f1f1f]">
      <Navbar></Navbar>
      <main className="h-[cacl(100-5rem)] box-border dark:bg-[#1f1f1f]">{children}</main>
    </div>
  );
};
export default HomeLayout;
