import styled from "styled-components/native"
import { R } from "@github/res"
import { Text, FitImage, Button } from "@github-shared"

export const StyledText = styled(Text)`
  font-size: ${R.fontSize.big}px;
  align-self: center;
  padding-left: 10px;
`

export const StyledButton = styled(Button)`
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 5px;
  height: 60px;
`

export const Icon = styled(FitImage)`
  width: 40px;
`
