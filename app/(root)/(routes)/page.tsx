import BackDropImage from "./_components/backdrop-image";
import HeroSection from "./_components/hero-section";
import OurProducts from "./_components/our-products";
import Navbar from "./_components/navbar";
import UseCases from "./_components/use-cases";
import OurFeatures from "./_components/our-features";
import FAQ from "./_components/faq";
import OurTestimonials from "./_components/our-testimonials";
import GetStarted from "./_components/get-started";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <HeroSection />
        <OurProducts />
        <UseCases />
        <OurFeatures />
        <FAQ />
        <OurTestimonials />
        <GetStarted />
        <BackDropImage />
      </div>
      <Footer />
    </>
  );
}
