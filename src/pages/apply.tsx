import { FunctionComponent } from "react"
import { ApplyFaqSection } from "../components/ApplyFaqSection"
import { SocialMetadata } from "../components/Marketing"

export default (() => (
  <>
    <SocialMetadata
      title="Apply to Falling Walls Lab Delft 2020"
      canonicalUrl="https://fwldelft.com/apply"
    />
    <ApplyFaqSection />
  </>
)) as FunctionComponent
