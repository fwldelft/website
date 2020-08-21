import { FunctionComponent } from "react"
import { ApplyFaqSection } from "../components/ApplyFaqSection"
import { Countdown } from "../components/Countdown"
import { HowWorksSection } from "../components/HowWorksSection"
import { SocialMetadata } from "../components/Marketing"
import { PrizesSection, WhyParticipate } from "../components/WhyParticipate"

export default (() => (
  <>
    <SocialMetadata
      title="Apply to Falling Walls Lab Delft 2020"
      canonicalUrl="https://fwldelft.com/apply"
    />
    <WhyParticipate />
    <Countdown />
    <PrizesSection />
    <HowWorksSection />
    <a id="howto" />
    <ApplyFaqSection />
  </>
)) as FunctionComponent
