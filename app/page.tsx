/*
 *
 * landing page
 * author: Shamit Fatin
 * date:   30/08/2021
 *
 */

"use client";
import { motion } from "framer-motion";
import { Button, Typography } from "@mui/material";

// my components
import NoisyBackground from "@components/landing_page/noisy_background";
import Navbar from "@components/landing_page/navbar";
import HeroSection from "@components/landing_page/hero_section";
import ServiceDescription from "@components/landing_page/service_description";
import CurrentStat from "@components/landing_page/current_stat";
import CustomerReview from "@components/landing_page/customer_review";
import Blog from "@components/landing_page/blog";
import Footer from "@components/landing_page/footer";

const Page = () => {
  return (
    <>
      <NoisyBackground>
        <Navbar />
        <HeroSection />
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
};

export default Page;
