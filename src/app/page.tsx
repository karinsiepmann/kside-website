import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ansatz from "@/components/Ansatz";
import Offers from "@/components/Offers";
import FuerWen from "@/components/FuerWen";
import FemAiLab from "@/components/FemAiLab";
import Community from "@/components/Community";
import Referenzen from "@/components/Referenzen";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Ansatz />
      <Offers />
      <FuerWen />
      <FemAiLab />
      <Community />
      <Referenzen />
      <FAQ />
      <Footer />
    </main>
  );
}
