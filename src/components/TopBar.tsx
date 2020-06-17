import MenuIcon from "!@svgr/webpack!../img/menu-24px.svg"
import Link from "next/link"
import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

let i = 0

export const TopBar: FunctionComponent = () => {
  const menuOpenId = React.useMemo(() => `__menu-open__${i++}__`, [])

  return (
    <nav className={cx(styles["top-navigation"], styles["row"])}>
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
        <input
          id={menuOpenId}
          className={styles["menu-open"]}
          type="checkbox"
        />
        <label htmlFor={menuOpenId} className={styles["menu-open-label"]}>
          <MenuIcon />
        </label>
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
          <Link href="/apply">
            <a>
              <li className={cx(styles["accent-button"])}>Apply</li>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
