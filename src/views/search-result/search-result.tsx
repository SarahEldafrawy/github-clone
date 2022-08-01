import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FlatList, ActivityIndicator } from "react-native"
import { R } from "@github/res"
import { StatusBar } from "@github-shared"
import {
  searchAction,
  searchResult,
  searchResultHasMore,
  searchResultPage,
  clearResult,
  searchLoading,
  SearchType,
} from "@github/state"
import { SearchNavigation } from "@github/navigation/root-navigator"
import { ISearchResultProps } from "./search-result.props"
import { Wrapper, StyledView, ActivityIndicatorWrapper } from "./search-result.styles"
import { Header, Card } from "./components"

const SearchResult = ({ navigation, route }: ISearchResultProps): JSX.Element => {
  const { title, searchText } = route.params
  const dispatch = useDispatch()
  const result = useSelector(searchResult)
  const hasMore = useSelector(searchResultHasMore)
  const page = useSelector(searchResultPage)
  const loading = useSelector(searchLoading)

  const fetchData = () => {
    if (title === SearchNavigation.Organization) {
      dispatch(searchAction({ searchString: searchText, type: SearchType.Organization, page }))
    } else {
      dispatch(searchAction({ searchString: searchText, type: SearchType.User, page }))
    }
  }

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
        {loading && result.length === 0 ? (
          <ActivityIndicatorWrapper>
            <ActivityIndicator size="large" color={R.color.search.spinner} />
          </ActivityIndicatorWrapper>
        ) : (
          <FlatList
            data={result.map((elem) => ({ ...elem, rounded: title === SearchNavigation.People }))}
            renderItem={Card}
            keyExtractor={(item) => item.id}
            onEndReached={handleLoadMore}
          />
        )}
      </StyledView>
    </Wrapper>
  )
}

export default SearchResult
