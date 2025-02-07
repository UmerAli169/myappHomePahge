import React from 'react';
import Navbar from '../views/navbar/Navbar';
import Hero from '../views/heroSection/HeroSection';
import TrustedBrands from '../views/trustedBrands/TrustedBrands';
import DirectMailStats from '../views/directMailStats/DirectMailStats';
import PostPilot from '../views/contentBlock/Content';
import FeatureCard from '../views/featureCard/FeatureCard';
import Footer from '../views/footer/Footer';

import footerLinks from '../views/footer/data.json';
import Button from '@/components/navbar/Button';
import FastLaunch from '../views/fastLaunch/FastLaunch';
import Testimonials from '../views/testimonials/Testimonials';
import CaseStudy from '../views/caseStudy/CaseStudy';
import TryPostPilot from '../views/tryPostPilot/TryPostPilot';
import Insights from '../views/insights/Insights';
interface FooterLink {
  title: string;
  links: { name: string; url: string }[];
}

export default function page() {
  return (
    <div>
      {/* <Hero /> */}
      {/* <TrustedBrands /> */}
      {/* <DirectMailStats /> */}
      {/* <PostPilot /> */}
      {/* <FeatureCard /> */}
      {/* <FastLaunch/> */}
      {/* <Testimonials/> */}
      {/* <CaseStudy /> */}
      {/* <TryPostPilot /> */}
      {/* <Insights /> */}
    </div>
  );
}
