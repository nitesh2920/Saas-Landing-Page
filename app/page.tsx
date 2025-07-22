import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoSection from './components/LogoSection';
import Features from './components/Features'
import Product from './components/Product'

export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
   <Navbar />
   <Hero/>
   <LogoSection/>
   {/* <Features/> */}
   <Product/>

   </div>
    </>
   
  );
}
