import styled from "styled-components/native"
import { R } from "@github/res"
import { Text, FitImage } from "@github-shared"

export const StyledText = styled(Text)`
  font-size: ${R.fontSize.bigger}px;
  height: 40px;
  align-self: flex-end;
`

export const StyledContainer = styled.View`
  flex: 0.075;
  flex-direction: row;
  justify-content: space-between;
  padding: 35px 10px 0px;
  background-color: ${R.color.search.background};
`

export const InputWrapper = styled.View`
  flex-grow: 1;
  flex-direction: row;
  margin: 5px 0px;
  border-bottom-width: 1px;
  border-bottom-color: ${R.color.search.placeholder};
`

export const Icon = styled(FitImage)`
  width: 40px;
`

export const Input = styled.TextInput`
  color: ${R.color.search.text};
  font-size: ${R.fontSize.big}px;
  text-align: left;
  flex-grow: 1;
  text-decoration: ${(props) => (props?.value?.length === 0 ? "none" : "underline")};
  text-decoration-color: ${R.color.search.text};
`
