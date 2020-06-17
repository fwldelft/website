import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

export const Footer: FunctionComponent = () => (
  <footer>
    <section
      id="contact"
      className={cx(styles["section"], styles["questions-section"])}
    >
      <div className={cx(styles["wrapped-content"])}>
        <div>
          <h2>Questions?</h2>
          <p>Our team will be happy to answer you! Please contact:</p>
          <p>
            <a href="mailto:info@fwldelft.com">info@fwldelft.com</a>
          </p>
        </div>
      </div>
    </section>

    <section className={cx(styles["section"], styles["sponsors-section"])}>
      <div className={cx(styles["row"], styles["wrapped-content"])}>
        {/* <img
            src={require("../img/55b7e1a54913be08de710bf15ebea1fd.png")}
            className={cx(styles["sponsor-logo"])}
          />
          <img
            src={require("../img/ac1acc9c5d54f8a1eae3537e3ff39c55.jpg")}
            className={cx(styles["sponsor-logo"])}
          />
          <img
            src={require("../img/c1ce9b5b31d2f9866349dbcd47ac75b8.png")}
            className={cx(styles["sponsor-logo"])}
          /> */}
      </div>
    </section>
  </footer>
)
