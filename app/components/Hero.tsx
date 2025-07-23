"use client";

import CursorImage from "../../public/images/cursor.png";
import { motion } from "framer-motion";
import Image from "next/image";
import MessageImage from "../../public/images/message.png";
import BlurText from "./BlurText";

const Hero = () => {
  return (
    <div className="bg-black  text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-15 relative overflow-clip">
      {/* gradient div */}
      <div className="absolute h-[375px] w-[750px] rounded-[100%] bg-black left-1/2 -translate-x-1/2  border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-110px)] sm:top-[calc(100%-105px)] border sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[750px] "></div>

      <div className="container relative ">
        <div className="flex justify-center mt-2  ">
          <div className="inline-flex relative ">
            <h1 className="text-7xl hidden sm:text-9xl font-bold tracking-tighter text-center sm:inline-flex">
              Fancy UI <br /> is more
            </h1>

            <BlurText
            text={`Fancy UI \n is more`}
              delay={100}
              animateBy="letters"
              direction="top"
              className="text-7xl sm:hidden  font-bold tracking-tighter text-center inline-flex"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
              className="absolute  right-[420px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={CursorImage}
                alt="cursorImage"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 100, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
              className="absolute left-[440px] top-[60px] hidden sm:inline  "
              drag
              dragSnapToOrigin
            >
              <Image
                src={MessageImage}
                alt="messageImage"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center  mt-3 ">
          <p className="text-xl text-center mt-9 max-w-md">
            Experience a sleek, modern interface built for clarity and
            performance. Designed to impress, crafted to deliver every pixel has
            a purpose. Experience a sleek, modern interface built for clarity
            and performance.
          </p>
        </div>

        <div className="flex justify-center mt-9 ">
          <button className="bg-white cursor-pointer text-black py-3 px-5 rounded-lg font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
