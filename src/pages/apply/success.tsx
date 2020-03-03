import { css, jsx } from "@emotion/core"
import { NextPage } from "next"
import Link from "next/link"
import { Title } from "../../components/Sections/Landing/Title"
import { colors } from "../../theme"

const ApplySuccessPage: NextPage = () => (
  <Title>
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
          max-width: 500px;
        `}
      >
        <p>Thanks! We'll keep in touch.</p>
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

export default ApplySuccessPage
