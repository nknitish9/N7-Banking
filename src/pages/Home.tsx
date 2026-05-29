import MainLayout from "../layouts/MainLayout";
import Hero from "../sections/Hero/Hero";
import Solutions from "../sections/Solutions/solutions";
import CoreBanking from "../sections/CoreBanking/CoreBanking";
import CTA from "../sections/CTA/CTA";
import DigitalBanking from "../sections/DigitalBanking/DigitalBanking";
import Insights from "../sections/Insights/Insights";
import CaseStudies from "../sections/CaseStudies/CaseStudies";
import CTASection from "../sections/CTASection/CTASection";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Solutions />
      <CoreBanking />
      <CTA />
      <DigitalBanking />
      <Insights />
      <CaseStudies />
      <CTASection />
    </MainLayout>
  );
};

export default Home;