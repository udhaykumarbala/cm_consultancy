import { useState } from 'react'
import HeaderSection from './Home/HeaderSection'
import HeroSection from './Home/HeroSection'
import WhyChooseUsSection from './Home/WhyChooseUsSection'
import OurServicesSection from './Home/OurServicesSection'
import QualityAssuranceSection from './Home/QualityAssuranceSection'
import OurCommitmentSection from './Home/OurCommitmentSection'
import JoinUsSection from './Home/JoinUsSection'
import FooterSection from './Home/FooterSection'
import "../src/css/StyleSheet.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="overflow-x-hidden bg-gray-50">
        <HeaderSection/>
        <HeroSection/>
      </div>
      <WhyChooseUsSection/>
      <OurServicesSection/>
      <QualityAssuranceSection/>
      <OurCommitmentSection/>
      <JoinUsSection/>
      <FooterSection/>
    </>
  )
}

export default App
