import Image from "next/image";
const Human = () => {
  return (
    <div className="flex flex-row items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className=" relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:h-[330px] md:w-[330px]">
          <Image
            src="/documents.png"
            fill
            alt=""
            className="object-contain dark:hidden"
          />
          <Image
            src="/documents-dark.png"
            fill
            alt="document"
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className=" relative md:h-[330px] md:w-[330px] hidden md:block">
          <Image
            src="/reading.png"
            fill
            alt="document"
            className="object-contain dark:hidden"
          />
          <Image
            src="/reading-dark.png"
            fill
            alt="document"
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Human;
