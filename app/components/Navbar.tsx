'use client'

import Image from "next/image";
import MenuIcon from "../../public/icons/menu.svg";
import Link from "next/link";
import { useState } from "react";



const navOptions=["About","Features","Updates","Help","Customers"];
const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen]=useState(false);
  return (
    <div className="bg-black">
        <div className="px-8 p-5  bg-black">
        <div className="py-4 flex items-center justify-between">



          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md "></div>
            <Image
              src="/icons/logo.svg"
              alt="logo"
             width ={50}
             height={50}
              className="h-12 w-12"
            />
          </div>

          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
           
           <button onClick={()=>setIsMenuOpen(!isMenuOpen)}  >
            <MenuIcon className="text-white" />

           </button>
          </div>

          <nav className=" items-center gap-6 sm:flex">
            {navOptions.map((item,index)=>{
                return(
                    <Link key={index} href="" className="opacity-60 text-white hover:opacity-100 ">{item}</Link>
                )
            })}
            <button className="bg-white opacity-80 text-black px-4 py-2 hover:opacity-100 rounded-lg ">Get Started</button>

          </nav>

          



        </div>
      </div>
    </div>
  );
};

export default Navbar;
