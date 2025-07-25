import BentoGrid from "./BentoCard"

export default function Features() {

  return (
    <>
      <div className="  bg-black text-white py-[70px] sm:py-[24px] ">
        <div className="container">
          <h2 className="text-center font-bold text-4xl sm:text-6xl tracking-tighter">
            Everything you need
          </h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center mt-5 text-xl text-white/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              odit in facilis mollitia dolorum rerum.
            </p>
          </div>

          <div className=" flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <BentoGrid />

        </div>

        </div>
      </div>
    </>
  );
}
