import React from "react"
import { TouchableOpacity } from "react-native"
import { R } from "@github/res"
import { IHeaderProps } from "./header.props"
import { StyledContainer, Icon, StyledText } from "./header.styles"

const Header = ({ onPress, title }: IHeaderProps): JSX.Element => (
  <StyledContainer>
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <Icon source={R.image.back} />
    </TouchableOpacity>
    <StyledText bolded> {title} </StyledText>
  </StyledContainer>
)

export default Header
