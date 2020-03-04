import { css, jsx } from "@emotion/core"
import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { Title } from "../components/Sections/Landing/Title"
import { colors } from "../theme"

const ApplyFormPage: NextPage = () => (
  <Title>
    <Head>
      <title>Apply for FWL Delft 2020</title>
    </Head>
    <div
      css={css`
        height: 100vh;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
      `}
    >
      <div
        css={css`
          background: ${colors.white};
          padding: 1em;
          text-align: center;
          color: ${colors.black};
          font-size: 1.4em;
        `}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScgKzvKBiEsT8c0bQYmWvIrJ4OiTfHitYG4lPueF131tP3hrg/viewform?embedded=true"
          width="640"
          height="435"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>

        <p>
          <Link href="/" passHref={true}>
            <a
              css={css`
                color: inherit;
                text-decoration: inherit;
                color: ${colors.red};
              `}
            >
              &larr; Home page
            </a>
          </Link>
        </p>
      </div>
    </div>
  </Title>
)

export default ApplyFormPage
