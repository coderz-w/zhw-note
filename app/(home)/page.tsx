import Header from "./_compoments/header";
import Human from "./_compoments/human";
import Footer from "./_compoments/footer";
const Home = () => {
  return (
    <div className=" min-h-full flex flex-col box-border">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 box-border">
        <Header />
        <Human />
      </div>
      <div className="flex mt-[-3vw] box-border dark:bg-[#1f1f1f]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
