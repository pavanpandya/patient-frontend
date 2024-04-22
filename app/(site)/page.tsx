import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
// import About from "@/components/About";
// import FeaturesTab from "@/components/FeaturesTab";
// import FunFact from "@/components/FunFact";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "MediLink",
  description: "This is Home for MediLink",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      <FAQ />
      <Contact />
    </main>
  );
}
