import React, { FunctionComponent } from "react"
import { AboutSection } from "../components/AboutSection"
import { ApplyFaqSection } from "../components/ApplyFaqSection"
import { DetailsSection } from "../components/DetailsSection"
import { HeroLanding } from "../components/HeroLanding"
import { HowWorksSection } from "../components/HowWorksSection"
import { TestimonialsSection } from "../components/TestimonialsSection"

export default (() => (
  <>
    <HeroLanding />
    <AboutSection />
    <DetailsSection />
    <HowWorksSection />
    <TestimonialsSection />
    <ApplyFaqSection />
  </>
)) as FunctionComponent
