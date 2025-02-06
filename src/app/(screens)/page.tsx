import React from 'react'
import Navbar from '../views/navbar/Navbar'
import Hero from '../views/heroSection/HeroSection'
import TrustedBrands from '../views/trustedBrands/TrustedBrands'
import DirectMailStats from '../views/directMailStats/DirectMailStats'

export default function page() {
  return (
    <div> 
      
   <Navbar/>
   <Hero/>
   <TrustedBrands/>
   <DirectMailStats />
    </div>
  )
}
