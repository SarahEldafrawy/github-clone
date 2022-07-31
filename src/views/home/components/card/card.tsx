import React from "react"
import { TouchableOpacity } from "react-native"
import { ICardProps } from "./card.props"
import { Wrapper, StyledText, Icon, UnderlinedText } from "./card.styles"

const Card = ({ item: { title, source, text, onPress } }: { item: ICardProps }): JSX.Element => (
  <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
    <Wrapper>
      <Icon source={source} />
      <StyledText>
        {title} with "<UnderlinedText>{text}</UnderlinedText>"
      </StyledText>
    </Wrapper>
  </TouchableOpacity>
)

export default Card
