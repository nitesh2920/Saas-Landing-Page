import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoSection from './components/LogoSection';
import Product from './components/Product';
import Faq from './components/FaqSection';
import Features from './components/Features';
import PricingCard from './components/PricingCard';
import { PricingSection } from './components/PricingSection';

export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
   <Navbar />
   <Hero/>
   <LogoSection/>
   <Features/>
   <Product/>
   <Faq/>
   <PricingSection/>
  
   </div>
    </>
   
  );
}
