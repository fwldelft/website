import { css, jsx } from "@emotion/core"
import { FunctionComponent } from "react"
import { JudgeBox, Section, Subsection } from "./Util"

export const PreviousEditionPart: FunctionComponent = () => (
  <Section title="2019 Edition">
    <Subsection title="Video">
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFallingWallsLabDelft%2Fvideos%2F596794524420481%2F&show_text=0&width=560"
        width="560"
        height="315"
        css={css`
          border: none;
          overflow: hidden;
        `}
        scrolling="no"
        allowTransparency
        allowFullScreen
      />
    </Subsection>

    <Subsection title="Jury">
      <JudgeBox name="Marc Kalf" image="/static/jury-images/kalf.jpg" />
      <JudgeBox name="Bart Ahsmann" image="/static/jury-images/ahsmann.png" />
      <JudgeBox
        name="Paul van de Laar"
        image="/static/jury-images/vdlaar.jpg"
      />
      <JudgeBox name="Laura de Troia" image="/static/jury-images/detroia.jpg" />
      <JudgeBox
        name="Francesca Grazian"
        image="/static/jury-images/grazian.jpg"
      />
      <JudgeBox
        name="Anouk de Ruiter"
        image="/static/jury-images/deruiter.jpg"
      />
    </Subsection>
  </Section>
)
