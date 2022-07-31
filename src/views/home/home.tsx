import React, { useState } from "react"
import { TouchableWithoutFeedback, Keyboard } from "react-native"
import { Spacer, StatusBar, ScrollContainer } from "@github-shared"
import { R } from "@github/res"
import { AppRoute } from "@github/navigation/routes"
import { IHomeProps } from "./home.props"
import { Wrapper, StyledContainer, StyledText, TextContainer, Options } from "./home.styles"
import { SearchBar, Card } from "./components"

const Home = ({ navigation }: IHomeProps): JSX.Element => {
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false)
  const [text, setText] = useState<string>("")

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <>
        <Wrapper>
          <StatusBar preset="primary" contentPreset="light-content" />
          <SearchBar
            text={text}
            setText={setText}
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setSearchOpen}
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
        {text.length !== 0 && (
          <Options>
            <ScrollContainer>
              <Card
                text={text}
                title="Organizations"
                source={R.image.organization}
                onPress={() =>
                  navigation.push(AppRoute.SearchResult, {
                    title: "Organizations",
                    searchText: text,
                  })
                }
              />
              <Card
                text={text}
                title="People"
                source={R.image.people}
                onPress={() =>
                  navigation.push(AppRoute.SearchResult, { title: "People", searchText: text })
                }
              />
            </ScrollContainer>
          </Options>
        )}
      </>
    </TouchableWithoutFeedback>
  )
}

export default Home
