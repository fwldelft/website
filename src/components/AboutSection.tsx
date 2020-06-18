import ConferenceIcon from "!@svgr/webpack!../img/noun_conference_89481.svg"
import InnovatorIcon from "!@svgr/webpack!../img/noun_innovative_2340053.svg"
import NetworkingIcon from "!@svgr/webpack!../img/noun_network_1354320.svg"
import PitchIcon from "!@svgr/webpack!../img/noun_presentation_2578417.svg"
import Link from "next/link"
import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

export const AboutSection: FunctionComponent = () => (
  <section
    id="about"
    className={cx(styles["about-section"], styles["section"])}
  >
    <div className={cx(styles["grid"], styles["wrapped-content"])}>
      <h2>
        Falling Walls Lab
        <br />
        <span className={cx(styles["highlight"])}>Delft</span>
      </h2>
      <div className={cx(styles["about-info"])}>
        <p>
          The Falling Walls Lab is an interdisciplinary format to showcase the
          next generation of top researchers.
        </p>
        <p>
          In 3-minute talks, outstanding talents and innovative thinkers share
          their research projects, business models and social initiatives with
          an interdisciplinary audience and jury. Academic institutions
          worldwide are invited to host their own Falling Walls Lab and to send
          their winner/s to the Falling Walls Lab Finale on Nov 8th 2020 in
          Berlin.
        </p>
        <p>
          <Link href="/2020">
            <a>Read more about the Delft edition →</a>
          </Link>
        </p>
      </div>
      <div className={cx(styles["about-points"])}>
        <div className={cx(styles["about-point"], styles["col"])}>
          <div className={cx(styles["icon"])}>
            <InnovatorIcon />
          </div>
          <p>
            <b>WILL YOU BE THE INNOVATOR OF THE YEAR?</b>
          </p>
          <p>
            Present your groundbreaking idea in 3 minutes! Get a unique
            opportunity to give wings to your idea.
          </p>
        </div>
        <div className={cx(styles["about-point"], styles["col"])}>
          <div className={cx(styles["icon"])}>
            <PitchIcon />
          </div>
          <p>
            <b>GET HELP TO PREPARE YOUR PITCH</b>
          </p>
          <p>
            Every accepted applicant will have the opportunity to participate in
            a workshop on how to pitch your idea with a professional coach, for
            free.
          </p>
        </div>
        <div className={cx(styles["about-point"], styles["col"])}>
          <div className={cx(styles["icon"])}>
            <ConferenceIcon />
          </div>
          <p>
            <b>GET THE CHANCE TO PRESENT IN BERLIN</b>
          </p>
          <p>
            The best idea will get the opportunity to present their idea against
            other 99 brilliant innovators from all over the world.
          </p>
        </div>
        <div className={cx(styles["about-point"], styles["col"])}>
          <div className={cx(styles["icon"])}>
            <NetworkingIcon />
          </div>
          <p>
            <b>NETWORKING WITH THE BRIGHTEST MINDS</b>
          </p>
          <p>
            During the Competition there will be the opportunity to connect with
            the best members of the local scientific community and explore each
            other's views of the future.
          </p>
        </div>
      </div>
    </div>
  </section>
)
