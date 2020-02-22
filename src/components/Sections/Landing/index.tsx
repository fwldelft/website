import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { FunctionComponent } from "react"
import { colors } from "../../../theme"
import { Row, Slide } from "../../Layout"
import { Title } from "../Cover/Title"

const Red = styled.span`
  color: ${colors.red};
`

const MenuButton = styled.li`
  display: block;
  text-align: center;
  margin: 0.3em 0.1em;
  padding: 0.8em;

  background-color: ${colors.red};
  color: ${colors.white};
`

const DisabledMenuButton = styled(MenuButton)`
  background-color: ${colors.white};
  color: ${colors.red};
`

export const LandingSection: FunctionComponent = () => (
  <Slide
    css={css`
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;

      a {
        color: inherit;
        text-decoration: inherit;
      }
    `}
  >
    <Title
      css={css`
        min-height: 100vh;
        width: min-content;
        margin: 0 auto;
      `}
    >
      <h1
        css={css`
          background-color: ${colors.white};
          color: ${colors.darkgray};
          padding: 0.4em 0.8em;
          font-size: 4em;
          margin: 0;

          margin-bottom: 0.5em;
          width: min-content;
        `}
      >
        FALLING WALLS LAB <Red>DELFT</Red> 2020
      </h1>

      <ul
        css={css`
          margin: 4em 0;
          width: 100%;
          padding: 0;
        `}
      >
        <DisabledMenuButton>
          We will have news for you soon at
        </DisabledMenuButton>
        <Row
          css={css`
            flex-wrap: wrap;
            justify-content: space-evenly;

            > * {
              flex: 1 0 auto;
            }
          `}
        >
          <a href="https://www.facebook.com/FallingWallsLabDelft/">
            <MenuButton>Facebook</MenuButton>
          </a>
          <a href="https://www.instagram.com/fwldelft/">
            <MenuButton>Instagram</MenuButton>
          </a>
          <a href="mailto:info@fwldelft.com">
            <MenuButton>Email</MenuButton>
          </a>
        </Row>
      </ul>
    </Title>
  </Slide>
)
