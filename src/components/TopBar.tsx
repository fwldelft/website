import MenuIcon from "!@svgr/webpack!../img/menu-24px.svg"
import Link from "next/link"
import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import { EVENTBRITE_LINK } from "../data/links"
import { cx } from "../util/cx"

export const TopBar: FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleOpen = React.useCallback(() => {
    setIsOpen((v) => !v)
  }, [])
  const close = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  React.useEffect(() => {
    if (isOpen) {
      window.scroll(0, 0)
      document.body.style.overflowY = "hidden"
      document.body.style.height = "100vh"

      return () => {
        document.body.style.overflowY = ""
        document.body.style.height = ""
      }
    }
  }, [isOpen])

  return (
    <nav
      className={cx(
        styles["top-navigation"],
        styles["row"],
        isOpen && styles["is-open"]
      )}
    >
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

        <label onClick={toggleOpen} className={styles["menu-open-label"]}>
          <MenuIcon />
        </label>

        <ul className={cx(styles["nav-links"])} onClick={close}>
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
          <a href={EVENTBRITE_LINK}>
            <li className={cx(styles["accent-button"])}>Attend</li>
          </a>
        </ul>
      </div>
    </nav>
  )
}
