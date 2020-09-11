import React, { FunctionComponent } from "react"
import { SocialMetadata } from "../components/Marketing"
import { PersonBox } from "../components/PersonBox"
import { Section, SectionContent } from "../components/Section"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

const FactBox: FunctionComponent<{ n: string; qty: string }> = ({ n, qty }) => (
  <p>
    <style jsx>{`
      p {
        text-align: center;
      }
      span {
        display: inline-block;
        width: 100%;
      }

      .important-number {
        color: var(--accent-color);
        font-weight: bold;
        font-size: 3em;
      }
    `}</style>
    <span className="important-number">{n}</span>
    <span>{qty}</span>
  </p>
)

export const FactSection: FunctionComponent = () => (
  <Section className={cx(styles["no-min"])}>
    <SectionContent className={cx(styles["grid"])}>
      <FactBox n="80+" qty="event attendees" />
      <FactBox n="6" qty="high-caliber jury members" />
      <FactBox n="13" qty="groundbreaking ideas" />
      <FactBox n="1" qty="winner flying to berlin" />
    </SectionContent>
  </Section>
)

export default (() => (
  <>
    <SocialMetadata
      title="Falling Walls Lab Delft 2019"
      description="Recap the 2019 edition! The Falling Walls Lab is an interdisciplinary format to showcase the next generation of top researchers."
      canonicalUrl="https://fwldelft.com/2019"
    />

    <Section className={cx(styles["dry-cover"])}>
      <SectionContent>
        <h1>2019</h1>
        <h2>
          We had an amazing lab last year.
          <br />
          Check it out.
        </h2>
      </SectionContent>
    </Section>

    <FactSection />

    <Section>
      <iframe
        style={{ width: "100vw", height: "80vh" }}
        src="https://www.youtube-nocookie.com/embed/FghoNkMXMYg"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Section>

    <Section>
      <SectionContent className={cx(styles["grid"], styles["recap"])}>
        <h2>The event</h2>
        <div className={cx(styles["full"])}>
          <p>
            On September 18th, 2019, the first edition of Falling Walls Lab
            Delft gave the chance to 13 young innovators to explain their
            groundbreaking ideas in 3 min. A multi-disciplinary jury had the
            hard job to select one winner to send to Berlin, to present once
            again in front of hundreds of people the most impactful idea.
          </p>
          <p>
            Our Lab winner, Rushabh Chheda, presented in Berlin and won the
            third position, having the opportunity to pitch once again the 9th
            of November during the main conference, in front of people like the
            ministry of the education of Germany, the President of ERC or the
            director of the Nobel Foundation’s Board of Directors.
          </p>
        </div>

        <h2>The winners</h2>

        <PersonBox
          name="Rushabh Chheda"
          image="/static/2019/winners/rushabh.jpg"
          subtitle="1st prize"
          description="Breaking the Wall of plastic pollution and affordable housing"
          link="https://www.linkedin.com/in/rushabhschheda/"
        />
        <PersonBox
          name="Nima Salami"
          image="/static/2019/winners/nima.jpg"
          subtitle="2nd prize"
          description="Breaking the Wall of Outdated E-Health"
          link="https://www.linkedin.com/in/nima-salami/"
        />
        <PersonBox
          name="Else de Ridder"
          image="/static/2019/winners/else.jpg"
          subtitle="2nd prize"
          description="Breaking the Wall of sustainable healthcare"
          link="https://www.linkedin.com/in/else-de-ridder-561573a0/"
        />
        <PersonBox
          name="Petra Salaric"
          image="/static/2019/winners/petra.jpg"
          subtitle="3rd prize"
          description="Breaking the Wall of stigmas and taboos"
          link="https://www.linkedin.com/in/petra-salari%C4%87-77842183/"
        />

        <h2>The jury</h2>

        <PersonBox
          name="Marc Kalf"
          subtitle="Health Valley"
          image="/static/2019/jury/kalf.jpg"
          link="https://www.linkedin.com/in/marckalf/"
          description="Innovation manager at Health Valley and advisor at accelerators like YES!Delft. Our specialist in health."
        />
        <PersonBox
          name="Bart Ahsmann"
          subtitle="CLICKNL"
          image="/static/2019/jury/ahsmann.png"
          link="https://www.linkedin.com/in/bartahsmann/"
          description="As the Managing Director of CLICKNL and frequent advisor to the government, Bart was focusing on the design side of the pitches."
        />
        <PersonBox
          name="Laura de Troia"
          subtitle="SouthEataly"
          image="/static/2019/jury/detroia.jpg"
          link="https://www.linkedin.com/in/laura-de-troia-412a9aa2/"
          description="From SouthEataly, Laura is a specialist in administration, supplier, and social media management. Commerce and marketing are her forte."
        />
        <PersonBox
          name="Francesca Grazian"
          subtitle="TU Delft"
          image="/static/2019/jury/grazian.jpg"
          link="https://www.linkedin.com/in/francescagrazian/"
          description="Francesca is a Ph.D. researcher at TU Delft in power electronics. She was our expert in the engineering behind the solutions."
        />
        <PersonBox
          name="Anouk de Ruiter"
          subtitle="TEDx Delft"
          image="/static/2019/jury/deruiter.jpg"
          link="https://www.linkedin.com/in/anouk-de-ruiter-728b97b/"
          description="A TEDx Licensee and Project Manager, Anouk was our in-house expert in both pitching and visionary ideas."
        />
        <PersonBox
          name="Tino Mager"
          subtitle="TU Delft"
          image="/static/2019/board/tino.jpg"
          link="https://www.linkedin.com/in/tino-mager-23083569/"
        />

        <h2>Participants</h2>

        <PersonBox
          name="Saket Mostafa"
          description="Breaking the Wall of Universal Values"
        />
        <PersonBox
          name="Nathan Kramer"
          description="Breaking the Wall of Architecture and AI"
        />
        <PersonBox
          name="Nima Salami"
          description="Breaking the Wall of Outdated E-Health"
        />
        <PersonBox
          name="Roberto Merino-Martinez"
          description="Breaking the Wall of Aircraft noise"
        />
        <PersonBox
          name="Rushabh Chheda"
          description="Breaking the Wall of plastic pollution and affordable housing"
        />
        <PersonBox
          name="Shruti Singh"
          description="Breaking the Wall of Sustainability in Electrical Machines"
        />
        <PersonBox
          name="Yulia Zarechkina"
          description="Breaking the Wall of post-soviet cities"
        />
        <PersonBox
          name="Yue Mao"
          description="Breaking the Wall of human-centered perception of landscape"
        />
        <PersonBox
          name="Vöpel Tobias"
          description="Breaking the Wall of Agricultural Pollution"
        />
        <PersonBox
          name="Mohamed Abokersh"
          description="Breaking the Wall of Solar Thermal Market"
        />
        <PersonBox
          name="Else De Ridder"
          description="Breaking the Wall of sustainable healthcare"
        />
        <PersonBox
          name="Tslil Strauss"
          description="Breaking the Wall of Putting out Fires"
        />
        <PersonBox
          name="Petra Salaric"
          description="Breaking the Wall of stigmas and tabos"
        />
        <PersonBox
          name="Sneha Gokhale"
          description="Breaking the Wall of Wasteful Packaging"
        />

        <h2>Staff</h2>
        <PersonBox
          image="/static/2019/board/andrea.jpg"
          name="Andrea Riccio"
          subtitle="Organizer"
          link="https://www.linkedin.com/in/andrea-riccio-9a180a136/"
        />
        <PersonBox
          image="/static/2019/board/tino.jpg"
          name="Tino Mager"
          subtitle="Organizer"
          link="https://www.linkedin.com/in/tino-mager-23083569/"
        />

        <PersonBox
          className={cx(styles["reset-grid"])}
          name="Carlos Precioso"
          link="https://www.linkedin.com/in/carlosprecioso/"
          subtitle="Support"
        />
        <PersonBox
          name="Dario van Wagensveld"
          link="https://www.linkedin.com/in/dario-van-wagensveld/"
          subtitle="Support"
        />
        <PersonBox name="Federica Saitta" subtitle="Support" />
        <PersonBox name="Federica Perassi" subtitle="Support" />

        <h2>Sponsors</h2>

        <PersonBox
          name="TU Delft"
          link="https://www.tudelft.nl"
          image="/static/2019/sponsors/tudelft.png"
        />
        <PersonBox
          className={cx(styles["reset-grid"])}
          name="STUD"
          link="https://www.stud.nl/"
          image="/static/2019/sponsors/stud.png"
        />
        <PersonBox
          name="SouthEataly"
          link="https://www.facebook.com/southeataly/"
          image="/static/2019/sponsors/southeataly.jpg"
        />
        <PersonBox
          name="Bennini Bags"
          link="http://benninibags.com"
          image="/static/2019/sponsors/bennini.png"
        />
        <PersonBox
          name="Gusto Sano Napoletano"
          link="http://www.gustosanonapoletano.it"
          image="/static/2019/sponsors/gustosano.png"
        />
      </SectionContent>
    </Section>
  </>
)) as FunctionComponent
