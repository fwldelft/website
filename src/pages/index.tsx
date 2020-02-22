import { css, Global, jsx } from "@emotion/core"
import { NextPage } from "next"
import Head from "next/head"
import { LandingSection } from "../components/Sections/Landing"

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>FWL Delft 2020</title>
    </Head>
    <Global
      styles={css`
        html {
          min-height: -webkit-fill-available;
          height: 100vh;
        }
      `}
    />
    <LandingSection />
  </>
)

export default IndexPage
