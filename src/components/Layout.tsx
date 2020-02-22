import styled from "@emotion/styled"

export const Slide = styled.div`
  scroll-snap-align: start;
  scroll-snap-type: proximity;

  min-height: 100vh;
`

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export const Column = styled.div`
  display: flex;
  flex-flow: column nowrap;
`
