import styled from "styled-components/native"
import { R } from "@github/res"
import { Text, FitImage } from "@github-shared"

export const StyledText = styled(Text)`
  font-size: ${R.fontSize.bigger}px;
  height: 45px;
  align-self: flex-end;
`

export const StyledContainer = styled.View`
  flex: 0.08;
  flex-direction: row;
  padding: 35px 10px 0px;
  background-color: ${R.color.search.background};
`

export const Icon = styled(FitImage)`
  width: 40px;
`
