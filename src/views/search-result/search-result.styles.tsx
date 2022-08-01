import styled from "styled-components/native"
import { R } from "@github/res"
import { Container } from "@github-shared"

export const Wrapper = styled(Container)`
  background-color: ${R.color.search.background};
`

export const StyledView = styled.View`
  flex: 1;
`

export const ActivityIndicatorWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 80px;
`
