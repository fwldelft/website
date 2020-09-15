import React, { FunctionComponent } from "react"
import { Countdown } from "../components/Countdown"
import { SocialMetadata } from "../components/Marketing"
import { PersonBox } from "../components/PersonBox"
import { Section, SectionContent } from "../components/Section"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

export const Sponsors2020: FunctionComponent<{ showDescription?: boolean }> = ({
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
      name="Veertly"
      image="/static/2020/sponsors/veertly.png"
      subtitle="Partner"
      description={
        showDescription
          ? "Veertly is an online platform which allows you to host your online events and networking sessions, creating authentic connections."
          : ""
      }
      link="https://www.veertly.com/"
    />
  </>
)

export default (() => (
  <>
    <SocialMetadata canonicalUrl="https://fwldelft.com/2020" />

    <Section className={cx(styles["dry-cover"])}>
      <SectionContent>
        <h1>Falling Walls Lab Delft 2020</h1>
        <Countdown />
      </SectionContent>
    </Section>

    <Section>
      <SectionContent className={cx(styles["grid"], styles["recap"])}>
        <h2 id="jury">The jury</h2>

        <PersonBox
          name="Rushabh Chheda"
          image="/static/2020/jury/rushabh.jpg"
          subtitle="Conscious Designs"
          description="Rushabh Chheda is the founder of Conscious Designs, a Rotterdam-based startup that is working on an idea of using locally-sourced waste plastic to create affordable self-built housing for the low-incom communities in the developing world. Moreover, he was the winner of FWL Delft 2019 and finalist at the FWL Finale the same year; so he's uniquely in tune with how a pitcher is thinking."
          link="https://www.linkedin.com/in/rushabhschheda/"
        />
        <PersonBox
          name="Ina Dijstelbloem"
          image="/static/2020/jury/ina.jpg"
          subtitle="TU Delft"
          description="Ina is specialized in international marketing/communications. She is responsible for the international recruitment of master students at TU Delft and is always focused on how to convey a message to people world-wide. She will focus on the communication side of the pitches: message, supporting tools/visuals, passion, leadership, and connection with the viewers."
          link="https://www.linkedin.com/in/inadijstelbloem/"
        />
        <PersonBox
          name="Rogier Verberk"
          image="/static/2020/jury/rogier.jpg"
          subtitle="TNO"
          description="Dr Rogier Verberk holds a PhD in experimental physics from Leiden University (2005). At TNO he worked on EUV lithography and became principal project manager. From 2013 on he helped to set up the QuTech research center for quantum technologies. Since 2016 he is Market Director at TNO, responsible for semiconductor equipment-, quantum-, Industry4.0- and Medical Technologies."
          link="https://www.linkedin.com/in/rogier-verberk-12ab02a/"
        />
        <PersonBox
          name="Stefania Milan"
          image="/static/2020/jury/stefania.jpg"
          subtitle="University of Amsterdam"
          description="Stefania is Associate Professor of New Media and Digital Culture at the Department of Media Studies, University of Amsterdam. Her work explores the interplay between digital technology, activism and governance. She enjoys experimenting with digital and action-oriented research methods and finding ways to bridge research with policy and action."
          link="https://www.stefaniamilan.net/"
        />
        <PersonBox
          name="Gert Hans Berghuis"
          image="/static/2020/jury/gert.jpg"
          subtitle="Rabobank"
          description="Ir Gert Hans Berghuis has been working in innovation for over 20 years. After being a partner at strategic design agency Fabrique, he started working as a corporate innovation coach. Next to that, he is coaching startups and teaching about innovation at TU Delft. Since 2019, he is leading the Innovation Factory at Rabobank, working on future business models and innovations."
          link="https://www.linkedin.com/in/gerthans/"
        />
        <PersonBox
          name="Hester den Ruijter"
          image="/static/2020/jury/hester.jpg"
          subtitle="KNAW"
          description="Hester den Ruijter works in the field of experimental cardiology. She focuses on research that bridges fundamental research and teh applicability of research for patients. She investigates the cause of the differences between men and women in the field of cardiovascular disease. The women in cardiology are central to her education and media campaigns."
          link="https://www.umcutrecht.nl/nl/ziekenhuis/zorgverleners/ruijter-den-h"
        />

        <h2 id="sponsors">The sponsors</h2>
        <Sponsors2020 />

        <h2>Participants</h2>

        <PersonBox
          name="You!"
          description="Click here to apply"
          link="/apply"
        />

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
