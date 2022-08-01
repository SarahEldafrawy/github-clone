import styled from "styled-components/native"
import { R } from "@github/res"
import { Container, Text, Row, Button, FitImage } from "@github-shared"

export const Wrapper = styled(Container)`
  background-color: ${R.color.background};
`

export const StyledText = styled(Text)`
  font-size: ${R.fontSize.huge}px;
  text-align: center;
`
export const StyledDescription = styled(Text)`
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

export const ButtonText = styled(Text)`
  color: ${R.color.home.buttonText};
  font-size: ${R.fontSize.medium}px;
`
export const ButtonTextSelected = styled(ButtonText)`
  color: ${R.color.home.buttonTextSelected};
  font-size: ${R.fontSize.medium}px;
`

export const Footer = styled(Row)`
  position: absolute;
  width: 100%;
  height: 80px;
  bottom: 0px;
  background-color: ${R.color.search.background};
  justify-content: space-around;
`
export const Icon = styled(FitImage)`
  height: 30px;
`
export const StyledButton = styled(Button)`
  flex-direction: column;
`
