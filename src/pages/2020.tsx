import React, { FunctionComponent } from "react"
import css from "styled-jsx/css"
import { DetailsSection } from "../components/DetailsSection"
import { Section, SectionContent } from "../components/Section"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

const { className: coverClassName, styles: coverStyles } = css.resolve`
  --background-color: var(--red-color);
  --text-color: var(--white-color);
  font-weight: bold;
  text-align: center;
`

export default (() => (
  <>
    <style jsx>{`
      h1 {
        font-size: 4em;
      }

      .teaser {
        grid-column-start: 1;
        grid-column-end: 5;
      }

      .teaser-section {
        text-align: center;
        display: contents;
      }
    `}</style>
    <Section className={cx(coverClassName)}>
      <SectionContent>
        <h1>2020</h1>
        <h2>
          We're already preparing this year's event.
          <br />
          Here you can get a small sneak peek.
        </h2>
      </SectionContent>

      {coverStyles}
    </Section>

    <DetailsSection />

    <Section>
      <SectionContent className={cx(styles["grid"])}>
        <div className={cx("teaser-section")}>
          <h2 className={cx("teaser")}>
            Come back soon to find out about 2020's...
          </h2>
          <h2>Speakers</h2>
          <h2>Programme</h2>
          <h2>Jury</h2>
          <h2>Board</h2>
        </div>
      </SectionContent>
    </Section>
  </>
)) as FunctionComponent
