import React from "react"
import { ICardProps } from "./card.props"
import { Wrapper, StyledText, Icon } from "./card.styles"

const Card = ({ item: { avatarUrl, name, login, bio } }: { item: ICardProps }): JSX.Element => (
  <Wrapper>
    <Icon source={{ uri: avatarUrl }} />
    <StyledText>{name}</StyledText>
    <StyledText>{login}</StyledText>
    <StyledText>{bio}</StyledText>
  </Wrapper>
)

export default Card
