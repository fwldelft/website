import Link from "next/link"
import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

export const WhyParticipate: FunctionComponent = () => (
  <section className={cx(styles["section"], styles["whypart-section"])}>
    <div className={cx(styles["grid"], styles["wrapped-content"])}>
      <h1>
        Do you have an idea for a research project, a business model or a social
        initiative?
      </h1>
      <h1>Is it original and innovative?</h1>
      <h1>Is it relevant to the world of today?</h1>
      <Link href="/apply">
        <a>
          <h1 className={cx(styles["accent"])}>
            Apply to pitch at Falling Walls Lab Delft!
          </h1>
          <p>There are 500€ in prizes!</p>
        </a>
      </Link>
    </div>
  </section>
)

const PrizeRow: FunctionComponent<{
  title: string
  full?: boolean
  style?: React.CSSProperties
}> = ({ title, children, style }) => (
  <div style={style}>
    <style jsx>{`
      div {
        grid-column: span 2;
        background-color: var(--white-color);
        color: var(--black-color);
        padding: 1em;
        padding-top: 0;
      }
      h1 {
        font-size: 2em;
        margin-top: 0.8em;
        margin-bottom: 0.8em;
      }
    `}</style>
    <h1>{title}</h1>
    <div>{children}</div>
  </div>
)

export const PrizesSection: FunctionComponent = () => (
  <section className={cx(styles["section"], styles["prizes-section"])}>
    <style jsx>{`
      .big {
        font-size: 4em;
        color: var(--red-color);
      }
      div {
        text-align: center;
      }
      h2 {
        margin: 0;
      }
      p {
        margin: 0;
      }
    `}</style>
    <div className={cx(styles["grid"], styles["wrapped-content"])}>
      <PrizeRow title="Main prize" style={{ gridRow: "span 2" }}>
        <h2 className="big">300€</h2>+
        <p>
          <b>
            Pitching at the
            <br />
            <a href="https://falling-walls.com/">
              international finale in Berlin
            </a>
          </b>
          <br />
          In front of decision makers and innovator from all over the world, and
          giving you global coverage through a myriad of networks.
        </p>
        +
        <p>
          <b>Tutoring for your pitch </b>
        </p>
        +
        <p>
          <b>Help with your pitch video</b>
        </p>
      </PrizeRow>
      <PrizeRow title="Audience prize">
        <h2 className="big">100€</h2>
      </PrizeRow>
      <PrizeRow title="Audience prize">
        <h2 className="big">100€</h2>
      </PrizeRow>
      <PrizeRow title="All entrants" style={{ gridColumn: "span 4" }}>
        <p>
          <b>Free pitching workshop</b>
          <br />
          In preparation for your pitch at the event
        </p>
        +
        <p>
          <b>Present your project publicly</b>
          <br />
          In front of some of the best changemakers in the Netherlands{" "}
          <Link href="/2020" as="/2020#jury">
            <a>(check this year's jury)</a>
          </Link>
        </p>
      </PrizeRow>
    </div>
  </section>
)
