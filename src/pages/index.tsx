import Link from "next/link"
import React, { FunctionComponent } from "react"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

export default (() => (
  <>
    <header className={cx(styles["section"], styles["hero-section"])}>
      <div className={cx(styles["wrapped-content"])}>
        <div className={cx(styles["hero-section-title"])}>
          <h2>
            Your idea will{" "}
            <span className={cx(styles["highlight"])}>break</span> the
            <span className={cx(styles["highlight"])}>wall</span>
          </h2>
          <p>
            The Falling Walls Lab is an interdisciplinary format to showcase the
            next generation of top researchers.
          </p>
        </div>
        <div className={cx(styles["hero-section-date"])}>
          <p>
            Delft
            <br />
            <time>[FIXME] 2020</time>
          </p>
        </div>
      </div>
    </header>
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
            worldwide are invited to host their own Falling Walls Lab and to
            send their winner/s to the Falling Walls Lab Finale on [FIXME] in
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
            <div className={cx(styles["icon"])} />
            <p>
              <b>WILL YOU BE THE INNOVATOR OF THE YEAR?</b>
            </p>
            <p>
              Present your groundbreaking idea in 3 minutes! Get a unique
              opportunity to give wings to your idea.
            </p>
          </div>
          <div className={cx(styles["about-point"], styles["col"])}>
            <div className={cx(styles["icon"])} />
            <p>
              <b>GET HELP TO PREPARE YOUR PITCH</b>
            </p>
            <p>
              Every accepted applicant will have the opportunity to participate
              for free in a workshop on how to pitch your idea with a
              professional coach.
            </p>
          </div>
          <div className={cx(styles["about-point"], styles["col"])}>
            <div className={cx(styles["icon"])} />
            <p>
              <b>GET THE CHANCE TO PRESENT IN BERLIN</b>
            </p>
            <p>
              The best idea will get the opportunity to attend the Conference
              and the Lab Finale in Berlin and present again with other 99
              brilliant innovator from all over the world.
            </p>
          </div>
          <div className={cx(styles["about-point"], styles["col"])}>
            <div className={cx(styles["icon"])} />
            <p>
              <b>NETWORKING WITH THE BRIGHTEST MINDS</b>
            </p>
            <p>
              During the Competition there will be the opportunity to connect
              with the best member of the local scientific community and explore
              each other views of the future.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className={cx(styles["section"], styles["details-section"])}>
      <div className={cx(styles["wrapped-content"], styles["grid"])}>
        <div className={cx(styles["details-content"])}>
          <h2>Now online!</h2>
          <p>
            With the 2020 edition, we're breaking the wall of social distance!
            The Delft lab will take place completely digitally in September
            2020.
          </p>
          <p>
            We're still finalizing the details of which platform to use; but
            rest assured, you will be able to join from anywhere, watch the
            presentations, and network with an interdisciplinary audience. Keep
            your eyes peeled and follow us on our social media for timely info.
          </p>
          <p>
            <a href="https://instagram.com/fwldelft">Instagram</a> ·
            <a href="https://www.facebook.com/FallingWallsLabDelft">Facebook</a>
          </p>
        </div>
      </div>
    </section>
    <section className={cx(styles["section"], styles["how-works-section"])}>
      <div className={cx(styles["grid"], styles["wrapped-content"])}>
        <h2>How it works</h2>
        <div className={cx(styles["how-works-step-ruler"])} />
        <div className={cx(styles["how-works-step"], styles["first"])}>
          <div className={cx(styles["how-works-step-number"])}>1</div>
          <p>Apply for Delft Lab before [FIXME].</p>
          <p>
            Fill in the application to submit your idea (which will take no more
            than 10 minutes)
          </p>
        </div>
        <div className={cx(styles["how-works-step"])}>
          <div className={cx(styles["how-works-step-number"])}>2</div>
          <p>
            Our committee will make a pre-selection of candidates and we will
            get back to you within two weeks
          </p>
        </div>
        <div className={cx(styles["how-works-step"])}>
          <div className={cx(styles["how-works-step-number"])}>3</div>
          <p>
            If you are selected as one of the participants, we will invite you
            to Delft Lab on June 12th, 2020
          </p>
        </div>
        <div className={cx(styles["how-works-step"])}>
          <div className={cx(styles["how-works-step-number"])}>4</div>
          <p>
            The winner of Moscow round will get the trip to Berlin and chance to
            present the idea at Grand Finale
          </p>
          <p>Trip and accommodation expenses are covered</p>
        </div>
        <div className={cx(styles["how-works-note"])}>
          <p>
            Three winners of the Berlin Lab Finale receive a cash prize and the
            opportunity to give their talk on the grand stage of the Falling
            Walls Conference on [FIXME] in front of 600 institution leaders and
            decision makers
          </p>
        </div>
      </div>
    </section>
    <section className={cx(styles["section"], styles["testimonials-section"])}>
      <div className={cx(styles["grid"], styles["wrapped-content"])}>
        <div className={cx(styles["testimonials-content"])}>
          <blockquote className={cx(styles["blockquote"])}>
            <div className={cx(styles["quote"])}>
              <p>
                <b>Breaking the wall of affordable housing and wast plastic</b>
              </p>
              <p>
                Rushabh Chheda won third place at the Falling Walls Lab Finale
                2019 in Berlin with his pitch on creating affordable housing
                while simultaneously reducing waste plastic.
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
                characters). It could be a research project, a business model or
                a social initiative, which is at the same time original and new,
                innovative (overcoming old ideas and concepts) and relevant to
                the problems of the world today.
              </p>
            </div>
          </div>
          <div className={cx(styles["card"], styles["faq-how-step"])}>
            <div className={cx(styles["faq-how-step-number"])}>3</div>
            <div className={cx(styles["faq-how-step-content"])}>
              <p>
                <b>Title your presentation</b> and provide a short description
                of your idea in one sentence (50 characters).
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
          <div className={cx(styles["card"], styles["faq-faq-qa"])}>
            <p className={cx(styles["faq-faq-q"])}>
              We are working on a project as a group. Can we apply for a Lab as
              a group?
            </p>
            <p>
              You cannot apply for a Lab as a group, as individual grades and
              the curriculum vitae of the applicant are important factors in the
              evaluation process of your application. If you are a member of a
              project group, please choose one representative to apply for the
              Lab. If you are selected to participate in a Lab, your group
              representative will present your project. You are obviously free
              to include the names of the group members on your presentation
              slides in order to acknowledge and appreciate the group effort
              behind the project. However, it is important that you clearly
              highlight the extent of your individual contribution to the
              project.
            </p>
          </div>
          <div className={cx(styles["card"], styles["faq-faq-qa"])}>
            <p className={cx(styles["faq-faq-q"])}>
              Are there any costs for participating?
            </p>
            <p>
              After applying, the selected participants will be invited to join
              the Falling Walls Lab. There are no costs/fees for participating.
            </p>
            <p>
              If you apply for an international Falling Walls Lab and you don't
              live near the city you selected, you will have to make your own
              arrangements for travel and accommodation. The Falling Walls
              Foundation and international Lab organisers cannot cover any of
              your costs.
            </p>
            <p>
              The winners of each international Falling Walls Lab qualify for
              the Falling Walls Lab Finale on 8 November in Berlin. The hosting
              institutions for each Lab cover your travel epenses to Berlin. A
              scholarship will cover your accommodation expenses at our partner
              hotel from 8 to 9 November and a ticket to the Falling Walls
              Conference on 9 November.
            </p>
          </div>
          <div className={cx(styles["card"], styles["faq-faq-qa"])}>
            <p className={cx(styles["faq-faq-q"])}>
              I don’t have a breakthrough yet. Can I participate anyway?
            </p>
            <p>
              By breakthrough we understand an idea, a research project, a
              business model or social initiative, which is at the same time
              original and new, innovative (overcoming old ideas and concepts)
              and relevant to the problems of the world today. This means that
              your breakthrough could be a project you already realised, a
              research topic you are developing or a business idea yet to be
              built up. Our jury members will appreciate authentic presenters
              with a vision and proof of concept.
            </p>
          </div>
          <div className={cx(styles["card"], styles["faq-faq-qa"])}>
            <p className={cx(styles["faq-faq-q"])}>
              To present my idea in 3 minutes sounds impossible. How should that
              work?
            </p>
            <p>
              You will find out that it works – and preparing your 3-minute
              presentation will provide you with a new perspective on the topics
              you are working with. Having to shape your topic into a so-called
              "elevator pitch" is a challenging restriction on the one hand –
              but it also emphasises what is most essential about the idea: What
              it is, how it works and what it can be used for.
            </p>
            <p>
              <i>
                Hint: to visualise your presentation explain to us which wall
                you would like to break down, why it exists and how you intend
                to break it.
              </i>
            </p>
          </div>
        </div>
      </div>
    </section>
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
          <img
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
          />
        </div>
      </section>
    </footer>
  </>
)) as FunctionComponent
