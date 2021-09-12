import React, { FunctionComponent } from "react"
import { AboutSection } from "../components/AboutSection"
import { Countdown } from "../components/Countdown"
import { DetailsSection } from "../components/DetailsSection"
import { HeroLanding } from "../components/HeroLanding"
import { EventSEO } from "../components/Marketing"
import { Section, SectionContent } from "../components/Section"
import { TestimonialsSection } from "../components/TestimonialsSection"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"
import { Sponsors2020 } from "./2020"
import { Sponsors2021 } from "./2021"

export default (() => (
  <>
    <EventSEO />

    <HeroLanding />
    <Countdown />
    <AboutSection />

    <Section className={cx(styles["no-min"])}>
      <SectionContent className={cx(styles["grid"], styles["recap"])}>
        <Sponsors2021 showDescription={false} />
      </SectionContent>
    </Section>

    <DetailsSection />
    <TestimonialsSection />
  </>
)) as FunctionComponent
