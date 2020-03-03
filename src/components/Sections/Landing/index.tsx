import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { FunctionComponent } from "react"
import { brandedText, colors } from "../../../theme"
import { Title } from "./Title"

const Red = styled.span`
  color: ${colors.red};
`

export const MenuButton = styled.li`
  display: block;
  text-align: center;
  margin: 0.3em 0.1em;
  padding: 0.8em;

  background-color: ${colors.red};
  color: ${colors.white};
`

export const LandingSection: FunctionComponent = () => {
  return (
    <>
      {" "}
      <div
        css={css`
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-start;
          overflow-x: hidden;

          position: static;
          width: 100%;

          a {
            color: inherit;
            text-decoration: inherit;
          }
        `}
      >
        <Title
          css={css`
            width: min-content;
            margin: 2em auto;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-around;
            align-items: center;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-flow: column nowrap;
              align-items: center;
              width: 100%;
              background-color: ${colors.white};
              padding: 1.6em 3.2em;
            `}
          >
            <div css={css``}>
              <h1
                css={css`
                  ${brandedText};
                  color: ${colors.gray};
                  font-size: 4em;
                  width: min-content;
                  margin-top: 0.2em;
                  font-weight: 800;
                `}
              >
                FALLING WALLS LAB
                <br />
                <Red>DELFT</Red> 2020
              </h1>
            </div>

            <p>
              Present your research project to an illustrious panel of jurors,
              impress them and win a trip to Berlin!
            </p>
            <a href="#explore">
              <MenuButton>Explore</MenuButton>
            </a>
          </div>
        </Title>
      </div>
      <div id="explore" />
    </>
  )
}
