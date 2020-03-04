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
      <JudgeBox
        name="Marc Kalf"
        subtitle="Health Valley"
        image="/static/jury-images/kalf.jpg"
        link="https://www.linkedin.com/in/marckalf/"
      />
      <JudgeBox
        name="Bart Ahsmann"
        subtitle="CLICKNL"
        image="/static/jury-images/ahsmann.png"
        link="https://www.linkedin.com/in/bartahsmann/"
      />
      <JudgeBox
        name="Paul van de Laar"
        subtitle="Museum Rotterdam"
        image="/static/jury-images/vdlaar.jpg"
        link="https://www.linkedin.com/in/paul-van-de-laar-89298323/"
      />
      <JudgeBox
        name="Laura de Troia"
        subtitle="SouthEataly"
        image="/static/jury-images/detroia.jpg"
        link="https://www.linkedin.com/in/laura-de-troia-412a9aa2/"
      />
      <JudgeBox
        name="Francesca Grazian"
        subtitle="TU Delft"
        image="/static/jury-images/grazian.jpg"
        link="https://www.linkedin.com/in/francescagrazian/"
      />
      <JudgeBox
        name="Anouk de Ruiter"
        subtitle="TEDx Delft"
        image="/static/jury-images/deruiter.jpg"
        link="https://www.linkedin.com/in/anouk-de-ruiter-728b97b/"
      />
    </Subsection>
  </Section>
)
