import { css, jsx } from "@emotion/core"
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  IconDefinition
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FunctionComponent } from "react"
import { brandedText, colors } from "../../../theme"

const SocialLink: FunctionComponent<{
  name: string
  link: string
  image: IconDefinition
}> = ({ name, link, image }) => (
  <a
    css={css`
      display: block;
      width: 2em;
      height: 2em;
      margin-left: 0.5em;
      color: ${colors.white};

      transition: color 0.3s ease-in-out;

      &:hover {
        color: ${colors.red};
      }
    `}
    href={link}
    title={name}
  >
    <FontAwesomeIcon icon={image} />
  </a>
)

export const FooterSection: FunctionComponent = () => (
  <footer
    css={css`
      background-color: ${colors.black};
      color: ${colors.white};
      padding: 1em 2em;

      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    `}
  >
    <p
      css={css`
        ${brandedText};
        flex-grow: 1;
      `}
    >
      Falling Walls Lab Delft
      <br />
      The organisers are independent partners of the Falling Walls Foundation.
    </p>

    <SocialLink
      name="Facebook page"
      link="https://www.facebook.com/FallingWallsLabDelft/"
      image={faFacebookSquare}
    />
    <SocialLink
      name="Instagram page"
      link="https://www.instagram.com/fwldelft/"
      image={faInstagramSquare}
    />
    <SocialLink
      name="LinkedIn page"
      link="https://www.linkedin.com/company/fwldelft/"
      image={faLinkedin}
    />
    <SocialLink
      name="Email"
      link="mailto:info@fwldelft.com"
      image={faEnvelopeSquare}
    />
  </footer>
)
