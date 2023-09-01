// Note: Home page

import { Inter } from "next/font/google";

import Navbar from "@/components/landing-page/navbar";
import HeroSection from "@/components/landing-page/hero-section";
import ServiceDescription from "@/components/landing-page/service-description";
import CurrentStat from "@/components/landing-page/current-stat";
import CustomerReview from "@/components/landing-page/customer-review";
import Blog from "@/components/landing-page/blog";
import Footer from "@/components/landing-page/footer";
import NoisyBackground from "@/components/landing-page/noisy-background";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NoisyBackground>
        <>
          <Navbar />
          <HeroSection />
        </>
      </NoisyBackground>
      <ServiceDescription />
      <CurrentStat />
      <NoisyBackground>
        <CustomerReview />
      </NoisyBackground>
      <Blog />
      <NoisyBackground>
        <Footer />
      </NoisyBackground>
    </>
  );
}