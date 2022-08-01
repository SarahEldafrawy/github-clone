import React, { useState } from "react"
import { TouchableWithoutFeedback, Keyboard } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { Spacer, StatusBar } from "@github-shared"
import { R } from "@github/res"
import { AppRoute } from "@github/navigation/routes"
import { SearchNavigation } from "@github/navigation/root-navigator"
import { IHomeProps } from "./home.props"
import {
  Wrapper,
  StyledContainer,
  StyledText,
  TextContainer,
  Options,
  ButtonText,
  ButtonTextSelected,
  Footer,
  StyledButton,
  Icon,
  StyledDescription,
} from "./home.styles"
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
              <StyledDescription>{R.string.home.description}</StyledDescription>
            </TextContainer>
          )}
        </StyledContainer>
        {text.length !== 0 && (
          <Options>
            <FlatList
              keyboardShouldPersistTaps="handled"
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
        <Footer>
          <StyledButton>
            <Icon source={R.image.home} />
            <ButtonTextSelected>Home</ButtonTextSelected>
          </StyledButton>
          <StyledButton>
            <Icon source={R.image.people} />
            <ButtonText>Profile</ButtonText>
          </StyledButton>
        </Footer>
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}

export default Home
