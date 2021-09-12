import React, { FunctionComponent } from "react"
import { Countdown } from "../components/Countdown"
import { SocialMetadata } from "../components/Marketing"
import { PersonBox } from "../components/PersonBox"
import { Section, SectionContent } from "../components/Section"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"
import { EVENTBRITE_LINK } from "../data/links"

export const Sponsors2021: FunctionComponent<{ showDescription?: boolean }> = ({
  showDescription = true,
}) => (
  <>
    <PersonBox
      name="TNO"
      image="/static/2020/sponsors/tno.jpg"
      subtitle="Main partner"
      description={
        showDescription
          ? "TNO connects people and knowledge to create innovations that boost the competitive strength of industry and the wellbeing of society in a sustainable way."
          : ""
      }
      link="https://www.tno.nl/"
    />
    <PersonBox
      name="Stud"
      image="/static/2020/sponsors/stud.png"
      subtitle="Partner"
      description={
        showDescription
          ? "Stud is a temporary employment agency in Delft for student, by students."
          : ""
      }
      link="https://www.stud.nl/"
    />
    <PersonBox
      name="Fast"
      image="/static/2021/sponsors/fast_ratio.PNG"
      subtitle="Partner"
      description={
        showDescription
          ? "Funding Ambitious Students TU Delft (FAST) is the student committee of Delft University Fund."
          : ""
      }
      link="https://www.tudelft.nl/fast"
    />
    <PersonBox
      name="TuDelft"
      image="/static/2021/sponsors/tudelft_ratio.PNG"
      subtitle="Partner"
      description={
        showDescription
          ? "TU Delft is the oldest and largest Dutch public technical university, ranked consistently as one of the best universities in the Netherlands"
          : ""
      }
      link="https://www.tudelft.nl"
    />
    <PersonBox
      name="ST"
      image="/static/2021/sponsors/stcorp.png"
      subtitle="Partner"
      description={
        showDescription
          ? "Science [&] Technology created technology to make the world a better place by conducting high-tec projects, services and consultancy."
          : ""
      }
      link="https://www.stcorp.nl/"
    />
  </>
)

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
      {/* <FactBox n="130+" qty="event attendees" /> */}
      <FactBox n="6" qty="high-caliber jury members" />
      <FactBox n="20+" qty="groundbreaking ideas" />
      <FactBox n="1" qty="winner flying to Berlin" />
    </SectionContent>
  </Section>
)

export default (() => (
  <>
    <SocialMetadata canonicalUrl="https://fwldelft.com/2021" />

    <Section className={cx(styles["dry-cover"])}>
      <SectionContent>
        <h1>2021</h1>
        <h2>Falling Walls Lab Third Edition Delft</h2>
        {/* <Countdown /> */}
      </SectionContent>
    </Section>

    <FactSection />

    {/* <Section>
      <iframe
        style={{ width: "100vw", height: "80vh" }}
        src="https://www.youtube.com/embed/8VZyN9yIIYY"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Section> */}

    <Section>
      <SectionContent className={cx(styles["grid"], styles["recap"])}>
        <h2>The event</h2>
        <div className={cx(styles["full"])}>
          <p>
            The countdown begins as on 22nd September, the third edition of
            Falling Walls Lab Delft will take place even bigger and bolder then
            before. With over 20+ bright ideas of young innovators in front of a
            global audience and 6 esteemed jury members from academia and
            industry.
          </p>
        </div>

        <h2 id="jury">The jury</h2>

        <PersonBox
          name="Erik Zoutman"
          image="/static/2021/jury/Erik.jpg"
          subtitle="Science [&] Technology"
          description="Erik holds a Master’s degree in Electrical Engineering from the University of Twente in the Netherlands. He started his career in the Dutch space industry at TNO in Delft where he was involved in building remote sensing instruments. In 2000 he co-founded the company Science and Technology Corp. and was CEO until 2018. Today he brings technology to the market as investor and incubator for several early stage technology companies.
          "
          link="https://nl.linkedin.com/in/zoutman"
        />
        <PersonBox
          name="Helma van den Berg-van Rijn"
          image="/static/2021/jury/Helma.jpg"
          subtitle="Muzus"
          description="Dr. Ir. Helma van den Berg-van Rijn (1982) is social designer at Muzus, a service design agency for societal matters. Helma has a passion for design solutions with a positive impact on society and make the world a better place for all people. During her PhD ‘Meaningful Encounters’, she explored how designers can learn from direct contact with difficult-to-reach user groups as children with autism and people with dementia (TU Delft, 2012).
          "
          link="https://www.linkedin.com/in/helmavanrijn/?originalSubdomain=nl"
        />
        <PersonBox
          name="Rogier Verberk"
          image="/static/2020/jury/rogier.jpg"
          subtitle="TNO"
          description="Dr Rogier Verberk holds a PhD in experimental physics from Leiden University (2005). At TNO he worked on EUV lithography and became principal project manager. From 2013 on he helped to set up the QuTech research center for quantum technologies. Since 2016 he is Market Director at TNO, responsible for semiconductor equipment-, quantum-, Industry4.0- and Medical Technologies."
          link="https://www.linkedin.com/in/rogier-verberk-12ab02a/"
        />
        <PersonBox
          name="Irene Rompa"
          image="/static/2021/jury/IreneRompa.jpeg"
          subtitle="Quantum Delta NL"
          description="Irene Rompa studied psychology but started her career expanding a reusable water bottle startup from the Netherlands to the United States. A campaigner for sustainability and doing good at heart, she’s initiated all kinds of projects and worked in the Dutch startup scene in several roles. Last year she joined Quantum Delta NL, a national program for the development of quantum technology in the Netherlands, as its Head of Communication.
          "
          link="https://nl.linkedin.com/in/irenerompa"
        />
        <PersonBox
          name="Sofia Fonda"
          image="/static/2020/winners/sofia_255.jpg"
          subtitle="TU Delft"
          description="Winner of FWL Delft 2020, Sofia Fonda is a fresh graduate in Design for Interaction, currently working as a Research Assistant at TU Delft. Last year she convinced the jury with her project Breaking the Wall of Shame, allowing women to clean their menstrual cup in public toilets. Her ambition is to use design to break stigmas around sexuality and mental healh and promote well-being.
          "
          link="https://nl.linkedin.com/in/sofiafonda"
        />
        <PersonBox
          name="Thijs Maartens          "
          image="/static/2021/jury/thijs.png"
          subtitle="Philips"
          description="Thijs in his current role at Philips Engineering Solutions, along with his team work to activate and execute prioritized cross functional projects that will help organizations reach their sustainability and circular economy goals, including developing custom methodologies to ensure appropriate resourcing, prioritization, and activation of sustainability strategies and roadmaps."
          link="https://www.linkedin.com/in/thijsmaartens/?originalSubdomain=nl"
        />

        <h2 id="sponsors">The sponsors</h2>
        <Sponsors2021 />

        {/* <h2>Participants</h2>

        <PersonBox
          name="You!"
          description="Click here to apply"
          link="/apply"
        /> */}

        <h2>Board</h2>
        <PersonBox
          image="/static/2020/board/andrea.jpg"
          name="Andrea Riccio"
          subtitle="Chair"
          link="https://www.linkedin.com/in/andrea-riccio-9a180a136/"
        />
        <PersonBox
          image="/static/2020/board/carlos.jpg"
          name="Carlos Precioso"
          link="https://www.linkedin.com/in/carlosprecioso/"
          subtitle="Financial manager"
        />
        <PersonBox
          image="/static/2020/board/dario.jpg"
          name="Dario van Wagensveld"
          link="https://www.linkedin.com/in/dario-van-wagensveld/"
          subtitle="Public relations"
        />
        <PersonBox
          image="/static/2020/board/francesco.jpg"
          name="Francesco Sirianni"
          link="https://www.linkedin.com/in/francesco-sirianni/"
          subtitle="Communication director"
        />
        <PersonBox
          image="/static/2020/board/roberto.png"
          name="Roberto Pozo"
          link="https://www.linkedin.com/in/robpozrub/"
          subtitle="Project manager"
        />
      </SectionContent>
    </Section>
  </>
)) as FunctionComponent
