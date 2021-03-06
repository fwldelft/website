import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import dates from "../data/dates"
import { cx } from "../util/cx"
import { DateDescriptionView } from "./Date"

export const HowWorksSection: FunctionComponent = () => (
  <section className={cx(styles["section"], styles["how-works-section"])}>
    <div className={cx(styles["grid"], styles["wrapped-content"])}>
      <h2>How it works</h2>
      <div className={cx(styles["how-works-step-ruler"])} />
      <div className={cx(styles["how-works-step"], styles["first"])}>
        <div className={cx(styles["how-works-step-number"])}>1</div>
        <p>
          Apply for Delft Lab before{" "}
          <b>
            <DateDescriptionView date={dates.application} />
          </b>
          .
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
          Delft Lab on{" "}
          <b>
            <DateDescriptionView date={dates.event} />
          </b>
        </p>
      </div>
      <div className={cx(styles["how-works-step"])}>
        <div className={cx(styles["how-works-step-number"])}>4</div>
        <p>
          The winner of the Delft round will get to join the Berlin edition and
          a chance to present the idea at the Grand Finale on{" "}
          <b>
            <DateDescriptionView date={dates.finale} />
          </b>
        </p>
      </div>
      <div className={cx(styles["how-works-note"])}>
        <p>
          Three winners of the Berlin Lab Finale receive a cash prize and the
          opportunity to give their talk in front of 600 institutional leaders
          and decision makers
        </p>
      </div>
    </div>
  </section>
)
