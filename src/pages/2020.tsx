import React, { FunctionComponent } from "react"
import { ApplyFaqSection } from "../components/ApplyFaqSection"
import { Countdown } from "../components/Countdown"
import { DetailsSection } from "../components/DetailsSection"
import { SocialMetadata } from "../components/Marketing"
import { Section, SectionContent } from "../components/Section"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

export default (() => (
  <>
    <SocialMetadata canonicalUrl="https://fwldelft.com/2020" />

    <Section className={cx(styles["dry-cover"])}>
      <SectionContent>
        <h1>2020</h1>
        <h2>
          We're already preparing this year's event.
          <br />
          Here you can get a sneak peek.
        </h2>
        <Countdown />
      </SectionContent>
    </Section>

    <DetailsSection />

    <Section>
      <SectionContent className={cx(styles["grid"])}>
        <div className={cx(styles["teaser-section"])}>
          <h2 className={cx(styles["teaser"])}>
            Come back soon to find out about 2020's...
          </h2>
          <h2>Speakers</h2>
          <h2>Programme</h2>
          <h2>Jury</h2>
          <h2>Board</h2>
        </div>
      </SectionContent>
    </Section>

    <ApplyFaqSection />
  </>
)) as FunctionComponent
