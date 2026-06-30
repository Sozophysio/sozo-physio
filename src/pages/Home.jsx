import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ConditionsSection from "../components/ConditionsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ConditionsSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;
