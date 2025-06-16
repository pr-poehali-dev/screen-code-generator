import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CarsSection from "@/components/CarsSection";
import MotorsportSection from "@/components/MotorsportSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CarsSection />
      <MotorsportSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
