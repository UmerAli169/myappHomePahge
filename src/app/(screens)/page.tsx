import React from "react";
import Navbar from "../views/navbar/Navbar";
import Hero from "../views/heroSection/HeroSection";
import TrustedBrands from "../views/trustedBrands/TrustedBrands";
import DirectMailStats from "../views/directMailStats/DirectMailStats";
import PostPilot from "../views/contentBlock/Content";
import FeatureCard from "../views/featureCard/FeatureCard";
import Footer from "../views/footer/Footer";


export default function page() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      {/* <TrustedBrands /> */}
      {/* <DirectMailStats /> */}
      {/* <PostPilot /> */}
      {/* <FeatureCard/> */}
      <Footer/>
    </div>
  );
}
