export const cx = (...classnames: string[]) =>
  classnames.filter((v) => v).join(" ")
