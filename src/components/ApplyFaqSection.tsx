import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

const QA: FunctionComponent<{ title: string }> = ({ title, children }) => {
  const [closed, setClosed] = React.useState(false)
  const handleClick = React.useCallback(
    () => setClosed((closed) => !closed),
    []
  )

  React.useEffect(() => {
    setClosed(true)
  }, [])

  return (
    <div
      className={cx(
        styles["card"],
        styles["faq-faq-qa"],
        closed && styles["closed"]
      )}
      onClick={handleClick}
    >
      <p className={cx(styles["faq-faq-q"])}>{title}</p>
      {children}
    </div>
  )
}

export const ApplyFaqSection: FunctionComponent = () => (
  <section className={cx(styles["section"], styles["faq-section"])}>
    <div className={cx(styles["grid"], styles["wrapped-content"])}>
      <div id="apply" className={cx(styles["faq-howto"])}>
        <h2>How to participate</h2>
        <p>Follow these four simple steps to submit your idea</p>
        <div className={cx(styles["card"], styles["faq-how-step"])}>
          <div className={cx(styles["faq-how-step-number"])}>1</div>
          <div className={cx(styles["faq-how-step-content"])}>
            <p>
              Click the button below and choose <b>Delft</b>.
            </p>
            <p>
              Fill in your <b>personal information</b> (name, country,
              education, etc.)
            </p>
          </div>
        </div>
        <div className={cx(styles["card"], styles["faq-how-step"])}>
          <div className={cx(styles["faq-how-step-number"])}>2</div>
          <div className={cx(styles["faq-how-step-content"])}>
            <p>
              Briefly <b>describe your topic</b>: address the problem you want
              to solve (200 characters), then offer your solution (200
              characters). It could be a research project, a business model or a
              social initiative, which is at the same time original and new,
              innovative (overcoming old ideas and concepts) and relevant to the
              problems of the world today.
            </p>
          </div>
        </div>
        <div className={cx(styles["card"], styles["faq-how-step"])}>
          <div className={cx(styles["faq-how-step-number"])}>3</div>
          <div className={cx(styles["faq-how-step-content"])}>
            <p>
              <b>Title your presentation</b> and provide a short description of
              your idea in one sentence (50 characters).
            </p>
          </div>
        </div>
        <div className={cx(styles["card"], styles["faq-how-step"])}>
          <div className={cx(styles["faq-how-step-number"])}>4</div>
          <div className={cx(styles["faq-how-step-content"])}>
            <p>
              <b>Explain your personal motivation</b> (400 characters).
            </p>
          </div>
        </div>
        <div className={cx(styles["card"], styles["faq-how-step"])}>
          <div className={cx(styles["faq-how-step-number"])}>5</div>
          <div className={cx(styles["faq-how-step-content"])}>
            <p>
              <b>Upload your CV</b> in PDF format.
            </p>
          </div>
        </div>
        <a href="https://falling-walls.com/lab/apply/">
          <button className={cx(styles["faq-howto-cta"])}>Apply now!</button>
        </a>
      </div>
      <div className={cx(styles["faq-faq"])}>
        <h2>FAQ</h2>
        <QA title="We are working on a project as a group. Can we apply for a Lab as a group?">
          <p>
            You cannot apply for a Lab as a group, as individual grades and the
            curriculum vitae of the applicant are important factors in the
            evaluation process of your application. If you are a member of a
            project group, please choose one representative to apply for the
            Lab. If you are selected to participate in a Lab, your group
            representative will present your project. You are obviously free to
            include the names of the group members on your presentation slides
            in order to acknowledge and appreciate the group effort behind the
            project. However, it is important that you clearly highlight the
            extent of your individual contribution to the project.
          </p>
        </QA>
        <QA title="Are there any costs for participating?">
          <p>
            After applying, the selected participants will be invited to join
            the Falling Walls Lab. There are no costs/fees for participating.
          </p>
          <p>
            If you apply for an international Falling Walls Lab and you don't
            live near the city you selected, you will have to make your own
            arrangements for travel and accommodation. The Falling Walls
            Foundation and international Lab organisers cannot cover any of your
            costs.
          </p>
          <p>
            The winners of each international Falling Walls Lab qualify for the
            Falling Walls Lab Finale on 8 November in Berlin. The hosting
            institutions for each Lab cover your travel epenses to Berlin. A
            scholarship will cover your accommodation expenses at our partner
            hotel from 8 to 9 November and a ticket to the Falling Walls
            Conference on 9 November.
          </p>
        </QA>
        <QA title="I don’t have a breakthrough yet. Can I participate anyway?">
          <p>
            By breakthrough we understand an idea, a research project, a
            business model or social initiative, which is at the same time
            original and new, innovative (overcoming old ideas and concepts) and
            relevant to the problems of the world today. This means that your
            breakthrough could be a project you already realised, a research
            topic you are developing or a business idea yet to be built up. Our
            jury members will appreciate authentic presenters with a vision and
            proof of concept.
          </p>
        </QA>
        <QA
          title="To present my idea in 3 minutes sounds impossible. How should that
            work?"
        >
          <p>
            You will find out that it works – and preparing your 3-minute
            presentation will provide you with a new perspective on the topics
            you are working with. Having to shape your topic into a so-called
            "elevator pitch" is a challenging restriction on the one hand – but
            it also emphasises what is most essential about the idea: What it
            is, how it works and what it can be used for.
          </p>
          <p>
            <i>
              Hint: to visualise your presentation explain to us which wall you
              would like to break down, why it exists and how you intend to
              break it.
            </i>
          </p>
        </QA>
      </div>
    </div>
  </section>
)
