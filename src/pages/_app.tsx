import { AppProps } from "next/app"
import Head from "next/head"
import { FunctionComponent } from "react"
import { Footer } from "../components/Footer"
import { TopBar } from "../components/TopBar"
import "../css/style.global.css"

export default (({ Component, pageProps }) => (
  <>
    <Head>
      <title>Falling Walls Lab Delft 2020</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link href="/static/fonts/dinot.css" rel="stylesheet" />
    </Head>
    <TopBar />
    <Component {...pageProps} />
    <Footer />
  </>
)) as FunctionComponent<AppProps>
