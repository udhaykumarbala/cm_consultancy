import HeaderSection from "./Home/HeaderSection";
import HeroSection from "./Home/HeroSection";
import WhyChooseUsSection from "./Home/WhyChooseUsSection";
import OurServicesSection from "./Home/OurServicesSection";
import QualityAssuranceSection from "./Home/QualityAssuranceSection";
import OurCommitmentSection from "./Home/OurCommitmentSection";
import JoinUsSection from "./Home/JoinUsSection";
import FooterSection from "./Home/FooterSection";
import "../src/css/StyleSheet.css";

function App() {
   return (
      <>
         <div className='overflow-x-hidden bg-white'>
            <HeaderSection />
            <HeroSection />
         </div>
         <OurServicesSection />
         <WhyChooseUsSection />
         <QualityAssuranceSection />
         <OurCommitmentSection />
         <JoinUsSection />
         <FooterSection />
      </>
   );
}

export default App;
