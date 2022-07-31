import React, { useState } from "react"
import { TouchableWithoutFeedback, Keyboard } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { Spacer, StatusBar } from "@github-shared"
import { R } from "@github/res"
import { AppRoute } from "@github/navigation/routes"
import { SearchNavigation } from "@github/navigation/root-navigator"
import { IHomeProps } from "./home.props"
import { Wrapper, StyledContainer, StyledText, TextContainer, Options } from "./home.styles"
import { SearchBar, Card } from "./components"

const optionsData = [
  {
    title: SearchNavigation.Organization,
    source: R.image.organization,
  },
  {
    title: SearchNavigation.People,
    source: R.image.people,
  },
]

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
            <FlatList
              data={optionsData.map((elem) => ({
                ...elem,
                text,
                onPress: () =>
                  navigation.push(AppRoute.SearchResult, {
                    title: elem.title,
                    searchText: text,
                  }),
              }))}
              renderItem={Card}
              keyExtractor={(item) => item.title}
            />
          </Options>
        )}
      </>
    </TouchableWithoutFeedback>
  )
}

export default Home
