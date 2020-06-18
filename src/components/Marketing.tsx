import React, { FunctionComponent } from "react"
import { JsonLd } from "react-schemaorg"
import type { Event } from "schema-dts"
import styles from "../css/style.module.css"
import EventPicture from "../img/46664f219655fbf5f1853111891cfc53.jpg"
import { cx } from "../util/cx"

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
              safari_web_id: "web.onesignal.auto.370dd028-ab8a-4720-9087-4e2c917686de",
            });
          });
        `,
      }}
    />
  </>
)

export const NotificationPrompt: FunctionComponent = () => (
  <div
    className={cx(
      "onesignal-customlink-container",
      styles["notification-prompt"]
    )}
  />
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

export const EventSEO: FunctionComponent = () => (
  <>
    <JsonLd<Event>
      item={{
        "@context": "https://schema.org",
        "@type": "Event",
        name: "Falling Walls Lab Delft 2020",
        startDate: "2020-09-23",
        endDate: "2020-09-23",
        previousStartDate: "2020-06-04",
        eventStatus: [
          "http://schema.org/EventRescheduled",
          "http://schema.org/EventMovedOnline",
        ],
        eventAttendanceMode: "OnlineEventAttendanceMode",
        location: {
          "@type": "VirtualLocation",
          url: "https://fwldelft.com",
        },
        description:
          "The Falling Walls Lab is an interdisciplinary format to showcase the next generation of top researchers.",
        image: [EventPicture],
        offers: {
          "@type": "Offer",
          availability: "http://schema.org/InStock",
          price: 0,
          priceCurrency: "EUR",
        },
      }}
    />
  </>
)
