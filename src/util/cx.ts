export const cx = (...classnames: any[]) =>
  classnames.filter((v) => v).join(" ")
