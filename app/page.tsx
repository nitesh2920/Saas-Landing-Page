import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoSection from './components/LogoSection';
import Product from './components/Product';

export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
   <Navbar />
   <Hero/>
   <LogoSection/>
   <Product/>
   </div>
    </>
   
  );
}
