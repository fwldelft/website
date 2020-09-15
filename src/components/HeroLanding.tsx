import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import dates from "../data/dates"
import { EVENTBRITE_LINK } from "../data/links"
import { cx } from "../util/cx"
import { DateDescriptionView } from "./Date"

export const HeroLanding: FunctionComponent = () => (
  <header className={cx(styles["section"], styles["hero-section"])}>
    <div className={cx(styles["wrapped-content"])}>
      <div className={cx(styles["hero-section-title"])}>
        <h2>
          Your idea will <span className={cx(styles["highlight"])}>break</span>{" "}
          the <span className={cx(styles["highlight"])}>wall</span>
        </h2>
        <p>
          The Falling Walls Lab is an interdisciplinary format to showcase the
          next generation of top researchers.
        </p>
      </div>
      <div className={cx(styles["hero-section-date"])}>
        <a href={EVENTBRITE_LINK} title="Click to register">
          <p>
            Online
            <br />
            <DateDescriptionView date={dates.event} />
          </p>
        </a>
      </div>
    </div>
  </header>
)
