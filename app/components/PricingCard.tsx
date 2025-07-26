"use client";

import { useState } from "react";
import Link from "next/link";

interface SubscriptionToggleProps {
  yearlyPrice?: boolean;
  planName?: string;
  popular?: boolean;
  planDescription?: string;
  features: string[];
  price: {
    monthly: number;
    yearly: number;
  };
}

export function SubscriptionToggle(props: SubscriptionToggleProps) {
  return (
    <div className="h-full  ">
      <div className="relative flex flex-col h-full rounded-2xl bg-black border border-white/40 shadow shadow-black/80 p-6 font-bold ">
        {props.popular && (
          <div className="absolute top-0 right-0  mr-5 -mt-3 ">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm ">
              Most Popular
            </div>
          </div>
        )}

        <div className="mb-5">
          <div className="text-white/70 capitalize font-semibold mb-2">
            {props.planName}
          </div>
          <div className="inline-flex  items-baseline mb-2">
            <span className="text-white/70 font-bold text-3xl ">&#8377;</span>
            <span className="text-white/50 font-bold text-4xl">
              {props.yearlyPrice ? props.price.yearly : props.price.monthly}
            </span>
            <span className="text-white/70 font-medium"> /mo</span>
          </div>
          <div className="text-white/70 text-sm mb-5">
            {props.planDescription}
          </div>
          <Link
            href="#"
            className="text-white font-bold inline-flex w-full justify-center cursor-pointer whitespace-nowrap rounded-lg bg-[#5D2CA8]
                 px-2 py-3 text-sm shadow-sm sahdow-indigo-950/10
                  hover:bg-[#5D2CA2]
                  "
          >
            
            Purchase Plan
          </Link>
        </div>

        <div className="font-medium mb-3"> Includes: </div>
        <ul className="text-slate-400 text-sm space-y-3 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center ">
                <svg
                  className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const PricingCard = () => {
  const [isyearlyPrice, setIsYearlyPrice] = useState<boolean>(true);

  return (
    <div>
      <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
        <div className="relative flex w-full flex  p-2 bg-black  rounded-full ">
          <span className="absolute inset-0 m-1 pointer-events-none " aria-hidden="true">
            <span className={`absolute inset-0 w-1/2 bg-[#5D2CA8] rounded-full shadow-sm shadow-[#5D2CA8] transform transition-transform duration-150 ease-in-out ${isyearlyPrice? 'translate-x-0':'translate-x-full'}`}></span>
          </span>
         <button className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isyearlyPrice ? 'text-white/70' : ' text-white'}`} onClick={() => setIsYearlyPrice(true)} aria-pressed={isyearlyPrice}>Yearly <span className={`${isyearlyPrice ? 'text-indigo-200' : 'text-slate-400 '}`}>-20%</span></button>
          <button className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isyearlyPrice ? 'text-white/70' : ' text-white'}`} onClick={() => setIsYearlyPrice(false)} aria-pressed={isyearlyPrice}>Monthly</button>
        </div>
      </div>

      <div className="max-w-sm grid gap-6 lg:grid-cols-3  lg:max-w-none mx-auto ">
        <SubscriptionToggle
          yearlyPrice={isyearlyPrice}
          planName="standard"
          popular={true}
          price={{
            yearly: 4999,
            monthly: 799
          }}
          planDescription="Basic plan for individuals but hte majoritiy hav loreum epsucm succfully "
          features={[
            "unlimited access to basic features",
            "email support",
            "community access",
            "1GB storage"
          ]}
        />

      <SubscriptionToggle
          yearlyPrice={isyearlyPrice}
          popular={true}
          planName="Perform"
          price={{ yearly: 25999, monthly: 3999 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            'Unlimited placeholder texts',
            'Consectetur adipiscing elit',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
            'Predefined chunks as necessary',
          ]} />

        {/* Pricing tab 3 */}
        <SubscriptionToggle
          yearlyPrice={isyearlyPrice}
          planName="Enterprise"
          price={{ yearly: 79, monthly: 85 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            'Unlimited placeholder texts',
            'Consectetur adipiscing elit',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
            'Predefined chunks as necessary',
            'Free from repetition',
          ]} />
        
      </div>
    </div>
  );
};

export default PricingCard;
