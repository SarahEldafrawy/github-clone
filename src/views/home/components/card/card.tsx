import React from "react"
import { ICardProps } from "./card.props"
import { StyledText, Icon, StyledButton } from "./card.styles"

const Card = ({ item: { title, source, text, onPress } }: { item: ICardProps }): JSX.Element => (
  <StyledButton onPress={onPress}>
    <Icon source={source} />
    <StyledText>
      {title} with "{text}"
    </StyledText>
  </StyledButton>
)

export default Card
