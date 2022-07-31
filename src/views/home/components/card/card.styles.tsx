import styled from "styled-components/native"
import { R } from "@github/res"
import { Text, FitImage } from "@github-shared"

export const StyledText = styled(Text)`
  font-size: ${R.fontSize.big}px;
  align-self: center;
  padding-left: 10px;
`

export const UnderlinedText = styled(Text)`
  text-decoration: underline;
  text-decoration-color: ${R.color.search.text};
`

export const Wrapper = styled.View`
  flex-grow: 1;
  flex-direction: row;
  padding: 10px 5px;
  height: 60px;
`

export const Icon = styled(FitImage)`
  width: 40px;
`
