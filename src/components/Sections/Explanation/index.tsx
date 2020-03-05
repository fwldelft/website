import { css, jsx } from "@emotion/core"
import {
  faAward,
  faBullhorn,
  faForward,
  faPlaneDeparture,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FunctionComponent } from "react"
import { colors } from "../../../theme"
import { AboutPart } from "./About"
import { calendarIcon, weekCalendarIcon } from "./CalendarIcon"
import {
  Box,
  BoxIcon,
  ComingSoonBox,
  Section,
  Subsection,
  UnrevealedJudgeBox
} from "./Util"

const Step: FunctionComponent<{ icon: IconDefinition }> = ({
  icon,
  children
}) => (
  <div
    css={css`
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      margin: 1em auto;
    `}
  >
    <FontAwesomeIcon
      css={css`
        color: ${colors.red};
        margin-right: 2em;
        width: 5em;
        height: 5em;
        display: block;
      `}
      icon={icon}
    />
    <div
      css={css`
        width: 50%;
      `}
    >
      {children}
    </div>
  </div>
)

export const ExplanationSection: FunctionComponent = () => {
  return (
    <div
      css={css`
        color: ${colors.black};
        width: 80%;
        max-width: 1024px;
        margin: auto;
      `}
    >
      <Section title="Falling Walls Lab Delft 2020">
        <p>
          The <b>Falling Walls Lab</b> is an interdisciplinary format to
          showcase the next generation of top researchers developed and hosted
          annually by the Falling Walls Foundation in Berlin on November 8th. In
          3-minute talks, outstanding talents and innovative thinkers share
          their research projects, business models and social initiatives with
          an interdisciplinary audience and jury. Academic institutions
          worldwide are invited to host their own Falling Walls Lab and to send
          their winner/s to the Falling Walls Lab Finale on November 8th, 2020
          in Berlin.
        </p>

        <div>
          <Step icon={faBullhorn}>
            <p>
              Participants get the opportunity to{" "}
              <b>
                present their research work, business model, or social
                initiative
              </b>{" "}
              to a panel of high-calibre experts from academia and business - in
              a 3-minute pitch
            </p>
          </Step>

          <Step icon={faPlaneDeparture}>
            <p>
              The winner of <b>Falling Walls Lab Delft</b> wins a trip to Berlin
              where they will present the same idea at the Grand Finale in front
              of a distinguished jury among 100 Finalists from all over the
              world
            </p>
          </Step>

          <Step icon={faAward}>
            <p>
              All finalists{" "}
              <b>win a ticket to attend the Falling Walls Conference</b> (next
              day after Grand Finale) where they meet the{" "}
              <b>
                world's movers and shakers of science, business, and
                policy-makers
              </b>
            </p>
          </Step>

          <Step icon={faForward}>
            <p>
              Three winners of the Berlin Lab Finale <b>receive a cash prize</b>{" "}
              and the opportunity to{" "}
              <b>
                give their talk on the grand stage of the Falling Walls
                Conference
              </b>{" "}
              in front of 600 institution leaders and decision makers
            </p>
          </Step>
        </div>
      </Section>

      <Section title="Conference">
        <Subsection title="Venue">
          <ComingSoonBox />
        </Subsection>
        <Subsection title="Date">
          <Box image={<BoxIcon icon={calendarIcon} />}>
            <p>June 12th, 2020</p>
          </Box>
        </Subsection>
        <Subsection title="Jury">
          <UnrevealedJudgeBox />
          <UnrevealedJudgeBox />
          <UnrevealedJudgeBox />
          <UnrevealedJudgeBox />
          <UnrevealedJudgeBox />
          <UnrevealedJudgeBox />
        </Subsection>
      </Section>

      <Section title="Exhibition">
        <Subsection title="Topic">
          <ComingSoonBox />
        </Subsection>
        <Subsection title="Venue">
          <ComingSoonBox />
        </Subsection>
        <Subsection title="Date">
          <Box image={<BoxIcon icon={weekCalendarIcon} />}>
            <p>June 8th to 12th, 2020</p>
          </Box>
        </Subsection>
      </Section>

      <AboutPart />
    </div>
  )
}
