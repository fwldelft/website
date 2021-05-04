export interface DateDescription {
  date: Date
  name: string
  localizedFallback: string
}

const dates = {
  application: {
    date: new Date(2020, 8, 4, 23, 59, 59),
    name: "Application deadline",
    localizedFallback: "Sep 4th, 2020",
  },
  event: {
    date: new Date(2020, 8, 23, 3, 0, 0),
    name: "FWL Delft 2020",
    localizedFallback: "Sep 23rd, 2020",
  },
  finale: {
    date: new Date(2020, 10, 8),
    name: "FWL Berlin Finale",
    localizedFallback: "Nov 8th, 2020",
  },
  application21: {
    date: new Date(2020, 8, 8, 23, 59, 59),
    name: "Application deadline",
    localizedFallback: "Sep 8th, 2021",
  },
  event21: {
    date: new Date(2021, 8, 22, 3, 0, 0),
    name: "FWL Delft 2021",
    localizedFallback: "Sep 22nd, 2021",
  },
  finale21: {
    date: new Date(2020, 10, 10),
    name: "FWL Berlin Finale",
    localizedFallback: "Nov 10th, 2021",
  },
}

const typeTest: Record<string, DateDescription> = dates

export default dates

