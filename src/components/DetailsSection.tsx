import React from "react"
import styles from "../css/style.module.css"
import dates from "../data/dates"
import { cx } from "../util/cx"
import { DateDescriptionView } from "./Date"
import { NotificationPrompt } from "./Marketing"

export const DetailsSection = () => (
  <section className={cx(styles["section"], styles["details-section"])}>
    <div className={cx(styles["wrapped-content"], styles["grid"])}>
      <div className={cx(styles["details-content"])}>
        <h2>Now online!</h2>
        <p>
          With the 2020 edition, we're breaking the wall of social distance! The
          Delft lab will take place completely online on{" "}
          <DateDescriptionView date={dates.event} />.
        </p>
        <p>
          We're still finalizing the details of which platform to use; but rest
          assured, you will be able to join from anywhere, watch the
          presentations, and network with an interdisciplinary audience. Keep
          your eyes peeled and follow us on our social media for timely info.
        </p>
        <p>
          <a href="https://instagram.com/fwldelft">Instagram</a> ·{" "}
          <a href="https://www.facebook.com/FallingWallsLabDelft">Facebook</a>
        </p>
        <NotificationPrompt />
      </div>
    </div>
  </section>
)
