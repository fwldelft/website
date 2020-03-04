import { jsx, keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import { FunctionComponent } from "react"
import { Column } from "../../Layout"
// @ts-ignore
import backgroundImage from "./title-background.svg"

const PARTS = 10
const SECONDS_PER_SCREEN = 30

const ScrollAnimation = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-${(PARTS - 1) * (100 / PARTS)}%);
  }
`

const Container = styled.div`
  position: relative;
  overflow: hidden;
`

const Content = styled(Column)`
  position: relative;
  z-index: 10;

  justify-content: center;
  align-items: center;
`

const Scroller = styled.div`
  position: absolute;
  z-index: 5;
  left: 0;
  top: 0;
  width: ${100 * PARTS}%;
  height: 100vh;


  background-image: url("${backgroundImage}");
  background-size: auto 100%;
  background-repeat: repeat-x;

  transform: translateX(0);

  animation: ${ScrollAnimation} ${SECONDS_PER_SCREEN * (PARTS - 1)}s infinite
    linear alternate;
`

export const Title: FunctionComponent<{ className?: string }> = ({
  className,
  children
}) => (
  <Container>
    <Scroller />
    <Content className={className}>{children}</Content>
  </Container>
)
