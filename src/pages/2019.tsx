import { css, jsx } from "@emotion/core"
import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { PreviousEditionPart } from "../components/Sections/Explanation/PreviousEditionPart"
import { colors } from "../theme"

const _2019Page: NextPage = () => (
  <div
    css={css`
      margin-bottom: 5em;
    `}
  >
    <Head>
      <title>FWL Delft 2019</title>
    </Head>

    <div
      css={css`
        background: ${colors.red};
        color: ${colors.white};
        padding: 1em 2em;

        display: flex;
        flex-flow: row nowrap;
        align-items: center;
      `}
    >
      <Link href="/" passHref={true}>
        <a
          css={css`
            color: inherit;
            text-decoration: inherit;
          `}
        >
          &larr; Back
        </a>
      </Link>
    </div>
    <PreviousEditionPart />
  </div>
)

export default _2019Page
