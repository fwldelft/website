import createEmotionApp from "@cprecioso/next-emotion-ssr/app"
import { css, Global, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { AppProps } from "next/app"
import Head from "next/head"
import { FunctionComponent } from "react"
import "../../public/static/fonts/altedin/stylesheet.css"
import { colors } from "../theme"

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: ${colors.red};
  background-color: ${colors.white};
`

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Container>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-159829690-1"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-159829690-1');
`
        }}
      ></script>
    </Head>
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}
    />
    <Component {...pageProps} />
  </Container>
)

export default createEmotionApp(MyApp as any)
