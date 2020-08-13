import Link from "next/link"
import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import dates, { DateDescription } from "../data/dates"
import { cx } from "../util/cx"
import { DateDescriptionView } from "./Date"

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
      a {
        text-decoration: none;
      }
    `}</style>
    <div className={cx(styles["row"], styles["wrapped-content"])}>
      <Link href="/apply">
        <a>
          <CountdownCell date={dates.application}>Application</CountdownCell>
        </a>
      </Link>
      <Link href="/2020">
        <a>
          <CountdownCell date={dates.event}>Event</CountdownCell>
        </a>
      </Link>
      <a href="https://falling-walls.com/">
        <CountdownCell date={dates.finale}>Berlin Finale</CountdownCell>
      </a>
    </div>
  </section>
)
