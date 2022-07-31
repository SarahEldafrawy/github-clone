import styled from "styled-components/native"
import { R } from "@github/res"
import { Container, Text } from "@github-shared"

export const Wrapper = styled(Container)`
  background-color: ${R.color.background};
`

export const StyledText = styled(Text)`
  font-size: ${R.fontSize.bigger}px;
  text-align: center;
`

export const StyledContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`

export const TextContainer = styled.View`
  padding-bottom: 150px;
`

export const Options = styled.View`
  position: absolute;
  width: 100%;
  margin-top: 90px;
  background-color: ${R.color.search.background};
`
