import NimaayaNavbar from '@/app/navbar/navbar';
import About from '@/app/about/page';
import Programs from '@/components/Programs';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import ContactPage from '@/components/Contact';
import HeroNEW from '@/components/HeroNew';
import KindergartenHome from '@/components/Newhome';
export default function Page() {
  return (
    <div className="w-full overflow-x-hidden relative">
      <HeroNEW/>
      {/* <Hero/>
      <About/>
      <Programs/>
      <Gallery/>
      <ContactPage/> */}
 
    </div>
  );
}
