"use client";
import Image from "next/image";
import screen from "../../public/images/product.avif";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Product() {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <div className="py-[70px]  bg-gradient-to-b from-black to-[#5D2CAB] sm:py-[24px] ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl text-center font-bold tracking-tighter">
          Intituve interface
        </h2>

        <div className="max-w-xl mx-auto">
          <p className=" text-xl text-white/70 text-center mt-5 ">
            Loreum ipsum dolor, sit amet cosectet adispicin elit dinsig leighsi
            sconloreum
          </p>
        </div>

        <div className="flex justify-center">
          <motion.div
            className="max-w-6xl"
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px"
            }}
          >
            <Image
              src={screen}
              alt="product screen "
              ref={appImage}
              className="mt-14"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
