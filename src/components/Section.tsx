import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

export const Section: FunctionComponent<JSX.IntrinsicElements["div"]> = ({
  className,
  children,
  ...props
}) => (
  <div {...props} className={cx(styles["section"], className)}>
    {children}
  </div>
)

export const SectionContent: FunctionComponent<
  JSX.IntrinsicElements["div"]
> = ({ className, children, ...props }) => (
  <div {...props} className={cx(styles["wrapped-content"], className)}>
    {children}
  </div>
)
