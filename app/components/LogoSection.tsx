import LogoCarousel from "./LogoCarousel";

const LogoSection = () => {
  return (
    <div className="bg-black text-white py-[70px] sm:py-24">
      <div className="container ">
        <h2 className="text-lg text-center text-white/60 mb-17">
          Trusted by world&apos;s leading brands
        </h2>

        
        <LogoCarousel />
      </div>
    </div>
  );
};

export default LogoSection;
