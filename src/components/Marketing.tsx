import React, { FunctionComponent } from "react"

export const NotificationScript: FunctionComponent = () => (
  <>
    <script
      key="notification-script"
      src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
      async
    />
    <script
      key="notification-config"
      dangerouslySetInnerHTML={{
        __html: `
          window.OneSignal = window.OneSignal || [];
          OneSignal.push(function() {
            OneSignal.init({
              appId: "b2383728-3df7-4aaf-a38d-c13247a7156b",
            });
          });
        `,
      }}
    />
  </>
)

export const NotificationPrompt: FunctionComponent = () => (
  <div className="onesignal-customlink-container" />
)

export const AnalyticsScript: FunctionComponent = () => (
  <>
    <script
      key="analytics-script"
      src="https://www.googletagmanager.com/gtag/js?id=UA-159829690-1"
      async
    />
    <script
      key="analytics-config"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-159829690-1');
        `,
      }}
    />
  </>
)

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
