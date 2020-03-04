import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { faHourglass } from "@fortawesome/free-regular-svg-icons"
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FunctionComponent, ReactElement } from "react"
import { colors } from "../../../theme"

export const BoxIcon = styled(FontAwesomeIcon)`
  color: ${colors.red};
  width: 7em;
  height: 7em;
`

export const Section: FunctionComponent<{ title: string }> = ({
  title,
  children
}) => (
  <div
    css={css`
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      width: 100%;
    `}
  >
    <h2
      css={css`
        color: ${colors.red};
        margin: 5em auto 1em;
        font-size: 2em;
        border-bottom: 1px solid ${colors.red};
      `}
    >
      {title}
    </h2>
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
      `}
    >
      {children}
    </div>
  </div>
)

export const Subsection: FunctionComponent<{
  title: string
}> = ({ title, children }) => (
  <div
    css={css`
      display: flex;
      flex-flow: column nowrap;
      margin: 2em;
    `}
  >
    <h3
      css={css`
        color: ${colors.red};
        text-align: center;
      `}
    >
      {title}
    </h3>
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
      `}
    >
      {children}
    </div>
  </div>
)

export const Box: FunctionComponent<{
  image: ReactElement
}> = ({ image, children }) => (
  <div
    css={css`
      display: flex;
      flex-flow: column nowrap;
      text-align: center;
      align-items: center;
      margin: 1em;
    `}
  >
    <div
      css={css`
        width: 7em;
        height: 7em;
        object-fit: contain;
      `}
    >
      {image}
    </div>
    <div
      css={css`
        color: ${colors.black};
      `}
    >
      {children}
    </div>
  </div>
)

export const ComingSoonBox: FunctionComponent = () => (
  <Box
    image={
      <BoxIcon
        icon={faHourglass}
        css={css`
          opacity: 0.3;
        `}
      />
    }
  >
    <p>Will be revealed soon</p>
  </Box>
)

export const JudgeBox: FunctionComponent<{
  name: string
  link?: string
  image: string
  subtitle?: string
}> = ({ name, link, image, subtitle }) => (
  <a
    href={link}
    css={css`
      text-decoration: inherit;
      color: inherit;
      width: 10em;
      margin: 1em;
    `}
  >
    <Box
      image={
        <img
          src={image}
          css={css`
            width: 7em;
            height: 7em;
            object-fit: cover;
            border-radius: 50%;
          `}
          alt={`Photo of ${name}`}
        />
      }
    >
      <p
        css={css`
          margin-bottom: 0;
        `}
      >
        {name}
      </p>
      <p
        css={css`
          color: ${colors.gray};
          font-size: 0.8em;
          padding: 0;
          margin: 0;
        `}
      >
        {subtitle}
      </p>
    </Box>
  </a>
)

export const UnrevealedJudgeBox: FunctionComponent = () => (
  <Box
    css={css`
      width: 7em;
    `}
    image={
      <BoxIcon
        icon={faQuestionCircle}
        css={css`
          opacity: 0.3;
        `}
      />
    }
  >
    <p>To be revealed</p>
  </Box>
)
