import { AppProps } from "next/app"
import Head from "next/head"
import { FunctionComponent } from "react"
import { Footer } from "../components/Footer"
import {
  AnalyticsScript,
  NotificationScript,
  SiteIcons,
} from "../components/Marketing"
import { TopBar } from "../components/TopBar"
import "../css/style.global.css"

export default (({ Component, pageProps }) => (
  <>
    <Head>
      <title>Falling Walls Lab Delft 2020</title>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <link key="font-dinot" href="/static/fonts/dinot.css" rel="stylesheet" />
      <SiteIcons />
      <NotificationScript />
      <AnalyticsScript />
    </Head>
    <TopBar />
    <Component {...pageProps} />
    <Footer />
  </>
)) as FunctionComponent<AppProps>
