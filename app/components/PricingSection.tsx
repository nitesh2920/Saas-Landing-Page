import PricingCard from "./PricingCard";

export const PricingSection = () => {
  return (
    <div className="bg-black py-[70px] sm:py-24 bg-gradient-to-b from-black via-[#5D2CA8] to-black">
      <div className="container">
        <h2 className="text-4xl sm:text-7xl font-bold text-center tracking-tighter ">
          Choose Your Plan
        </h2>
        <div className=" mx-auto max-w-xl ">
          <p className="text-center mt-5 text-xl text-white/70">
            loreum ipsum dolor si am Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Architecto incidunt officia facere sit modi? A non
            facilis.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 px-24 py-[72px] sm:py-24 ">

          <PricingCard />
        </div>
      </div>
    </div>
  );
};
