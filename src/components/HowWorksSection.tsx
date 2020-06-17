import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

export const HowWorksSection: FunctionComponent = () => (
  <section className={cx(styles["section"], styles["how-works-section"])}>
    <div className={cx(styles["grid"], styles["wrapped-content"])}>
      <h2>How it works</h2>
      <div className={cx(styles["how-works-step-ruler"])} />
      <div className={cx(styles["how-works-step"], styles["first"])}>
        <div className={cx(styles["how-works-step-number"])}>1</div>
        <p>
          Apply for Delft Lab before <b>July 31st, 2020</b>.
        </p>
        <p>
          Fill in the application to submit your idea (which will take no more
          than 10 minutes)
        </p>
      </div>
      <div className={cx(styles["how-works-step"])}>
        <div className={cx(styles["how-works-step-number"])}>2</div>
        <p>
          Our committee will make a pre-selection of candidates and we will get
          back to you within two weeks
        </p>
      </div>
      <div className={cx(styles["how-works-step"])}>
        <div className={cx(styles["how-works-step-number"])}>3</div>
        <p>
          If you are selected as one of the participants, we will invite you to
          Delft Lab on June 12th, 2020
        </p>
      </div>
      <div className={cx(styles["how-works-step"])}>
        <div className={cx(styles["how-works-step-number"])}>4</div>
        <p>
          The winner of Moscow round will get the trip to Berlin and a chance to
          present the idea at Grand Finale
        </p>
        <p>Trip and accommodation expenses are covered</p>
      </div>
      <div className={cx(styles["how-works-note"])}>
        <p>
          Three winners of the Berlin Lab Finale receive a cash prize and the
          ity to give their talk on the grand stage of the Falling Walls
          Conference on Nov 8th 2020 in front of 600 institutional leaders and
          decision makers
        </p>
      </div>
    </div>
  </section>
)
