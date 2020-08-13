import React, { FunctionComponent } from "react"
import { DateDescription } from "../data/dates"

const formatter = (() => {
  try {
    const formatter = new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    return (d: DateDescription) => formatter.format(d.date)
  } catch {
    return
  }
})()

export const DateDescriptionView: FunctionComponent<{
  date: DateDescription
}> = ({ date }) => {
  const [formattedDate, setFormattedDate] = React.useState(
    date.localizedFallback
  )

  React.useEffect(
    () => void setFormattedDate(formatter?.(date) ?? date.localizedFallback),
    [date]
  )

  return (
    <time dateTime={date.date.toISOString()} title={date.name}>
      {formattedDate}
    </time>
  )
}
