import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FlatList } from "react-native"
import { StatusBar } from "@github-shared"
import {
  searchAction,
  searchResult,
  searchResultHasMore,
  searchResultPage,
  clearResult,
} from "@github/state"
import { ISearchResultProps } from "./search-result.props"
import { Wrapper, StyledView } from "./search-result.styles"
import { Header, Card } from "./components"

const SearchResult = ({ navigation, route }: ISearchResultProps): JSX.Element => {
  const { title, searchText } = route.params
  const dispatch = useDispatch()
  const result = useSelector(searchResult)
  const hasMore = useSelector(searchResultHasMore)
  const page = useSelector(searchResultPage)
  const [loading, setLoading] = useState(false)

  const fetchData = () => {
    setLoading(true)
    // TODO sarah: create navigation and state enums for people and organization
    if (title === "Organizations") {
      dispatch(searchAction({ searchString: searchText, type: "org", page }))
    } else {
      dispatch(searchAction({ searchString: searchText, type: "user", page }))
    }
  }

  useEffect(() => {
    setLoading(false)
  }, [page])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBack = () => {
    clearState()
    navigation.goBack()
  }

  const clearState = () => {
    dispatch(clearResult())
  }
  const handleLoadMore = () => {
    if (hasMore && !loading) {
      fetchData()
    }
  }
  return (
    <Wrapper>
      <StatusBar preset="primary" contentPreset="light-content" />
      <Header title={title} onPress={goBack} />
      <StyledView>
        <FlatList
          data={result}
          renderItem={Card}
          keyExtractor={(item) => item.id}
          onEndReached={handleLoadMore}
        />
      </StyledView>
    </Wrapper>
  )
}

export default SearchResult
