import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { ExplanationSection } from "../components/Sections/Explanation"
import { FooterSection } from "../components/Sections/Footer"
import { LandingSection, MenuButton } from "../components/Sections/Landing"
import { colors } from "../theme"

const FooterLink = styled(MenuButton)`
  background: ${colors.white};
  color: ${colors.black};

  a {
    color: inherit;
    text-decoration: inherit;
  }
`

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>FWL Delft 2020</title>
      <meta property="og:title" content="Falling Walls Lab Delft" />
      <meta name="twitter:title" content="Falling Walls Lab Delft" />
      <meta
        name="description"
        content="Present your research project to an illustrious panel of jurors, impress them and win a trip to Berlin!"
      />
      <meta
        property="og:description"
        content="Present your research project to an illustrious panel of jurors, impress them and win a trip to Berlin!"
      />
      <meta
        name="twitter:description"
        content="Present your research project to an illustrious panel of jurors, impress them and win a trip to Berlin!"
      />
      <meta property="og:image" content="/android-chrome-512x512.png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta name="twitter:image" content="/android-chrome-512x512.png" />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
    </Head>

    <MenuButton
      css={css`
        position: fixed;
        z-index: 20;
        bottom: 1em;
        right: 1em;
        box-shadow: 0 0 20px 0px ${colors.red};
      `}
    >
      <Link href="/apply" passHref={true}>
        <a
          css={css`
            color: inherit;
            text-decoration: none;
          `}
        >
          Apply now
        </a>
      </Link>
    </MenuButton>

    <LandingSection />

    <ExplanationSection />

    <div
      css={css`
        position: relative;
        z-index: 40;
      `}
    >
      <div
        css={css`
          background: ${colors.red};
          color: ${colors.white};
          padding: 5em 2em;
        `}
      >
        <div
          css={css`
            max-width: 500px;
            margin: 0 auto;
            text-align: center;
          `}
        >
          <h2>Interested?</h2>
          <FooterLink>
            <Link href="/apply" passHref={true}>
              <a>Apply as a participant</a>
            </Link>
          </FooterLink>
          <FooterLink>
            <Link href="/apply" passHref={true}>
              <a>Subscribe to our newsletter</a>
            </Link>
          </FooterLink>
          <FooterLink>
            <a href="mailto:info@fwldelft.com">Get in contact with us</a>
          </FooterLink>
        </div>
      </div>

      <div
        css={css`
          background: ${colors.gray};
          color: ${colors.white};
          padding: 1em 2em;
        `}
      >
        <Link href="/2019" passHref={true}>
          <a
            css={css`
              color: inherit;
              text-decoration: inherit;
            `}
          >
            Review the 2019 edition &rarr;
          </a>
        </Link>
      </div>

      <FooterSection />
    </div>
  </>
)

export default IndexPage
