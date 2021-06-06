import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import { DateDescription } from "../data/dates"
import { cx } from "../util/cx"
import { DateDescriptionView } from "./Date"
import { NotificationPrompt } from "./Marketing"
import { EVENTBRITE_LINK } from "../data/links"
import { FWL_OPEN_CALL } from "../data/links"
import { WORKSHOP_1_LINK } from "../data/links"

const CountdownCell: FunctionComponent<{ date: DateDescription }> = ({
  date,
  children,
}) => {
  const [daysLeft, setDaysLeft] = React.useState(null as number | null)

  React.useEffect(() => {
    const diff = +date.date - Date.now()
    const daysLeft =
      diff /
      1000 /* ms -> s */ /
      60 /* s -> min */ /
      60 /* min -> h */ /
      24 /* h -> day */

    setDaysLeft(daysLeft)
  }, [date])

  return (
    <div className="countdown-cell">
      <style jsx>{`
        .countdown-cell {
          text-align: center;
        }
        p {
          margin: 0;
          padding: 0;
        }
        .countdown-name {
          text-decoration: underline;
          font-weight: bold;
        }
        .countdown-number {
          font-size: 3em;
          font-weight: bold;
        }
        .countdown-subtitle {
          margin-top: -0.8em;
          margin-bottom: 0.8em;
          text-transform: uppercase;
          font-weight: bold;
        }
      `}</style>
      {daysLeft != null ? (
        <>
          {
            <p className="countdown-number">
              {daysLeft > 1
                ? "" + (daysLeft | 0)
                : daysLeft > 0
                ? "Today"
                : "Closed"}
            </p>
          }

          {daysLeft > 1 ? (
            <p className="countdown-subtitle">days left</p>
          ) : null}
        </>
      ) : null}
      <p className="countdown-name">{children}</p>
      <p className="countdown-date">
        <DateDescriptionView date={date} />
      </p>
    </div>
  )
}

export const Countdown: FunctionComponent<{}> = ({}) => (
  <section
    className={cx(
      styles["section"],
      styles["countdown-section"],
      styles["no-min"]
    )}
  >
    <style jsx>{`
      .countdowns a {
        text-decoration: none;
      }
      p {
        text-align: center;
        margin: 0;
        margin-top: 2em;
        padding: 0;
      }
      h1 {
        text-align: center;
      }
    `}</style>
    <div className={cx(styles["column"], styles["wrapped-content"])}>
      <h1>
        Falling Walls Lab 2021 Edition is happening on September 22, 2021{" "}
      </h1>
      <h3>
        <a href={FWL_OPEN_CALL} title="Click to apply">
          <p>Apply as a Participant</p>
        </a>
        <a href={EVENTBRITE_LINK} title="Click to register">
          <p>Register for the Event</p>
        </a>
        <a href={WORKSHOP_1_LINK} title="Click to register for workshop">
          <p>Participate in our Workshop</p>
        </a>
      </h3>

      <NotificationPrompt />
    </div>
  </section>
)
