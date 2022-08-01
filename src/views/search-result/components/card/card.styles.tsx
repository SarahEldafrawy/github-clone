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
`

export const Icon = styled(FitImage)<{ rounded: boolean }>`
  width: 40px;
  border-radius: ${(props) => (props.rounded ? "20px" : "5px")};
`
