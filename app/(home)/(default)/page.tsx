import HeroCarousel from '@/components/HeroCarousel';
import NimaayaNavbar from '@/app/navbar/navbar';
import DiagnosticService from '@/app/diagnostic-services/page';
import IntervantionalRadiology from '@/components/intervantionalRadiology';
import Radiologyservices from '@/components/Radiologyservices';

export default function Page() {
  return (
    <div className="w-full overflow-x-hidden relative">
      <NimaayaNavbar />
      <HeroCarousel />
      <DiagnosticService />
      <Radiologyservices />
      <IntervantionalRadiology />
    </div>
  );
}
