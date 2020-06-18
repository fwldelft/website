import Link from "next/link"
import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

export const TestimonialsSection: FunctionComponent = () => (
  <section className={cx(styles["section"], styles["testimonials-section"])}>
    <div className={cx(styles["grid"], styles["wrapped-content"])}>
      <div className={cx(styles["testimonials-content"])}>
        <blockquote className={cx(styles["blockquote"])}>
          <div className={cx(styles["quote"])}>
            <p>
              <b>Breaking the wall of affordable housing and waste plastic</b>
            </p>
            <p>
              Rushabh Chheda won third place at the Falling Walls Lab Finale
              2019 in Berlin with his pitch on creating affordable housing while
              simultaneously reducing waste plastic.
            </p>
          </div>
          <footer className={cx(styles["row"])}>
            <div className={cx(styles["quote-portrait"], styles["rushab"])} />
            <div>
              <p>
                <b>Rushab Chheda</b>
                <br />
                Winner FWL Delft 2019
              </p>
            </div>
          </footer>
        </blockquote>
        <p>
          <Link href="/2019">
            <a>Review the 2019 edition →</a>
          </Link>
        </p>
      </div>
    </div>
    <div className={cx(styles["background"])} />
  </section>
)
