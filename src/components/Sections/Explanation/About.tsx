import { css, jsx } from "@emotion/core"
import { FunctionComponent } from "react"
import { JudgeBox, Section, UnrevealedJudgeBox } from "./Util"

export const AboutPart: FunctionComponent = () => (
  <>
    <Section title="Board">
      <JudgeBox
        name="Andrea Riccio"
        image="/static/board-images/andrea.jpg"
        link="https://www.linkedin.com/in/andrea-riccio-9a180a136/"
        subtitle="Founder & Chair"
      />
      <JudgeBox
        name="Benedetta Grazian"
        image="/static/board-images/benedetta.jpg"
        link="https://www.linkedin.com/in/benedetta-grazian-357360160/"
        subtitle="Design manager"
      />
      <JudgeBox
        name="Carlos Precioso"
        image="/static/board-images/carlos.jpg"
        link="https://www.linkedin.com/in/carlosprecioso/"
        subtitle="Financial manager"
      />
      <JudgeBox
        name="Dario van Wagensveld"
        image="/static/board-images/dario.jpg"
        link="https://www.linkedin.com/in/dario-van-wagensveld/"
        subtitle="Public relations manager"
      />
      <JudgeBox
        name="Francesco Sirianni"
        image="/static/board-images/francesco.jpg"
        link="https://www.linkedin.com/in/francesco-sirianni/"
        subtitle="Communication director"
      />
      <JudgeBox
        name="Roberto Pozo"
        image="/static/board-images/roberto.png"
        link="https://www.linkedin.com/in/robertopozo33/"
        subtitle="Project manager"
      />
      <JudgeBox
        name="Tino Mager"
        image="/static/board-images/tino.jpg"
        link="https://www.linkedin.com/in/tino-mager-23083569/"
        subtitle="Public relations manager"
      />
    </Section>
    <Section title="Partners">
      <UnrevealedJudgeBox />
      <UnrevealedJudgeBox />
      <UnrevealedJudgeBox />
    </Section>
    <div
      css={css`
        margin-bottom: 5em;
      `}
    />
  </>
)
