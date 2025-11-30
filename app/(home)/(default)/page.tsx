
import Programs from '@/components/SmallProgram';
import SmallAbout from '@/components/SmallAbout';
import HeroNEW from '@/components/HeroNew';
import ProgramsSection from '@/components/ProgramsNew';
import BlogSection from '@/components/BlogComponents';
import Homecta from '@/components/HomeCta';

export default function Page() {
  return (
    <div className="w-full  to-white overflow-x-hidden relative">
      <HeroNEW/>
      <SmallAbout/>
        <ProgramsSection/>
              <Programs/>
        <Homecta/>  
      <BlogSection/>
 
    </div>
  );
}
