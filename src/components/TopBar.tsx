import Link from "next/link"
import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

export const TopBar: FunctionComponent = () => (
  <nav className={cx(styles["top-navigation"])}>
    <div className={cx(styles["wrapped-content"])}>
      <header>
        <a href="/">
          <h1 className={cx(styles["has-menu"])}>
            Falling Walls Lab
            <br />
            <span className={cx(styles["highlight"])}>Delft</span>
          </h1>
        </a>
      </header>
      <ul className={cx(styles["nav-links"])}>
        <Link href="/2020">
          <a>
            <li>2020 Edition</li>
          </a>
        </Link>
        <Link href="/2019">
          <a>
            <li>2019 Edition</li>
          </a>
        </Link>
        <Link href="/" as="/#about">
          <a>
            <li>About</li>
          </a>
        </Link>
        <a href="#contact">
          <li>Contact</li>
        </a>
        <Link href="/" as="/#apply">
          <a>
            <li className={cx(styles["accent-button"])}>Apply</li>
          </a>
        </Link>
      </ul>
    </div>
  </nav>
)
