import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FlatList } from "react-native"
import { StatusBar } from "@github-shared"
import { searchAction, searchResult, clearResult } from "@github/state"
import { ISearchResultProps } from "./search-result.props"
import { Wrapper, StyledView } from "./search-result.styles"
import { Header, Card } from "./components"

const SearchResult = ({ navigation, route }: ISearchResultProps): JSX.Element => {
  const { title, searchText } = route.params
  const dispatch = useDispatch()
  const result = useSelector(searchResult)

  useEffect(() => {
    // TODO sarah: create navigation and state enums for people and organization
    if (title === "Organizations") {
      dispatch(searchAction({ searchString: searchText, type: "org" }))
    } else {
      dispatch(searchAction({ searchString: searchText, type: "user" }))
    }
  }, [dispatch, searchText, title])

  const goBack = () => {
    clearState()
    navigation.goBack()
  }

  const clearState = () => {
    dispatch(clearResult())
  }

  return (
    <Wrapper>
      <StatusBar preset="primary" contentPreset="light-content" />
      <Header title={title} onPress={goBack} />
      <StyledView>
        <FlatList data={result} renderItem={Card} keyExtractor={(item) => item.id} />
      </StyledView>
    </Wrapper>
  )
}

export default SearchResult
