import React, { useState } from "react"
import { TouchableWithoutFeedback, Keyboard } from "react-native"
import { Spacer, StatusBar } from "@github-shared"
import { R } from "@github/res"
import { IHomeProps } from "./home.props"
import { Wrapper, StyledContainer, StyledText, TextContainer } from "./home.styles"
import { SearchBar } from "./components"

const Home = (props: IHomeProps): JSX.Element => {
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false)
  const [text, setText] = useState<string>("")

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Wrapper>
        <StatusBar preset="primary" contentPreset="light-content" />
        <SearchBar
          text={text}
          setText={setText}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setSearchOpen}
          {...props}
        />
        <StyledContainer>
          {isSearchOpen && text.length === 0 && (
            <TextContainer>
              <StyledText bolded>{R.string.home.descriptionTitle}</StyledText>
              <Spacer />
              <StyledText>{R.string.home.description}</StyledText>
            </TextContainer>
          )}
        </StyledContainer>
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}

export default Home
