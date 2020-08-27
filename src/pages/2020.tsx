import React, { FunctionComponent } from "react"
import { Countdown } from "../components/Countdown"
import { SocialMetadata } from "../components/Marketing"
import { PersonBox } from "../components/PersonBox"
import { Section, SectionContent } from "../components/Section"
import { WhyParticipate } from "../components/WhyParticipate"
import styles from "../css/style.module.css"
import { cx } from "../util/cx"

export default (() => (
  <>
    <SocialMetadata canonicalUrl="https://fwldelft.com/2020" />

    <Section className={cx(styles["dry-cover"])}>
      <SectionContent>
        <h1>2020</h1>
        <h2>
          We're already preparing this year's event.
          <br />
          Here you can get a sneak peek.
        </h2>
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
        <PersonBox name="More to be unveiled!" />

        <h2>The sponsors</h2>

        <PersonBox
          name="TNO"
          image="/static/2020/sponsors/tno.jpg"
          subtitle="Main partner"
          description="TNO connects people and knowledge to create innovations that boost the competitive strength of industry and the wellbeing of society in a sustainable way."
          link="https://www.tno.nl/"
        />

        <PersonBox
          name="Stud"
          image="/static/2020/sponsors/stud.png"
          subtitle="Partner"
          description="Stud is a temporary employment agency in Delft for student, by students."
          link="https://www.stud.nl/"
        />

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
          name="Dario van Wagensvald"
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
        <PersonBox
          image="/static/2020/board/tino.jpg"
          name="Tino Mager"
          subtitle="Public relations"
          link="https://www.linkedin.com/in/tino-mager-23083569/"
        />
      </SectionContent>
    </Section>

    <WhyParticipate />
  </>
)) as FunctionComponent
