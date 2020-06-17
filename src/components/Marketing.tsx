import React, { FunctionComponent } from "react"

export const SiteIcons: FunctionComponent = () => (
  <>
    <link
      key="site-icon-apple"
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-touch-icon.png"
    />
    <link
      key="favicon-small"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon-32x32.png"
    />
    <link
      key="favicon-big"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon-16x16.png"
    />
    <link key="site-manifest" rel="manifest" href="/site.webmanifest" />
  </>
)
