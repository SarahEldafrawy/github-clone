import styled from "styled-components/native"
import { R } from "@github/res"
import { Text, FitImage } from "@github-shared"

export const StyledText = styled(Text)`
  font-size: ${R.fontSize.big}px;
  align-self: center;
  padding-left: 10px;
`

export const Wrapper = styled.View`
  flex-grow: 1;
  flex-direction: row;
  padding: 15px;
  height: 70px;
  background-color: ${R.color.search.background};
`

export const Icon = styled(FitImage)`
  width: 40px;
  border-radius: 5;
`
