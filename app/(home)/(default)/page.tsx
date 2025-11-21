import HeroCarousel from '@/components/HeroCarousel';
import NimaayaNavbar from '@/app/navbar/navbar';
import About from '@/app/about/page';
import Programs from '@/components/Programs';
export default function Page() {
  return (
    <div className="w-full overflow-x-hidden relative">
      <NimaayaNavbar />
      <HeroCarousel />
      <About/>
      <Programs/>
 
    </div>
  );
}
