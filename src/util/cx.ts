type Falsy = "" | false | null | undefined | 0

export const cx = (...classnames: (string | Falsy)[]) =>
  classnames.filter((v) => v).join(" ")
