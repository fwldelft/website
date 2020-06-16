import React, { FunctionComponent } from "react"
import css from "styled-jsx/css"
import { Section, SectionContent } from "../components/Section"
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
        <h1>2019</h1>
        <h2>
          We had an amazing lab last year.
          <br />
          Check it out.
        </h2>
      </SectionContent>

      {coverStyles}
    </Section>
  </>
)) as FunctionComponent
