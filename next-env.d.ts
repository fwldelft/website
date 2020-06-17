/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "!@svgr/webpack!*.svg" {
  import { FunctionComponent } from "react"
  const SVG: FunctionComponent
  export default SVG
}
