import { AppProps } from "next/app"
import Head from "next/head"
import { FunctionComponent } from "react"
import { Footer } from "../components/Footer"
import { SiteIcons } from "../components/Marketing"
import { TopBar } from "../components/TopBar"
import "../css/style.global.css"

export default (({ Component, pageProps }) => (
  <>
    <Head>
      <title>Falling Walls Lab Delft 2020</title>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width,initial-scale=1"
      />
      <link key="font-dinot" href="/static/fonts/dinot.css" rel="stylesheet" />
      <SiteIcons />
    </Head>
    <TopBar />
    <Component {...pageProps} />
    <Footer />
  </>
)) as FunctionComponent<AppProps>
