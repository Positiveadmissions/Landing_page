import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LeadForm from "../components/LeadForm";
import Courses from "../components/Courses";
import WhyChooseUs from "../components/WhyChooseUs";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <Hero />
      <LeadForm />
      <Courses />
      <WhyChooseUs />
      <Faq />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

