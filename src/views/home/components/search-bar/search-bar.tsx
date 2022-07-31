import React from "react"
import { TouchableOpacity } from "react-native"
import { R } from "@github/res"
import { ISearchBarProps } from "./search-bar.props"
import { StyledContainer, Icon, StyledText, Input, InputWrapper } from "./search-bar.styles"

const SearchBar = ({
  isSearchOpen,
  setIsSearchOpen,
  text,
  setText,
}: ISearchBarProps): JSX.Element => {
  const closeSearch = () => {
    clearSearch()
    setIsSearchOpen(false)
  }
  const search = () => (isSearchOpen ? clearSearch() : setIsSearchOpen(true))

  const clearSearch = () => {
    setText("")
  }

  return (
    <StyledContainer>
      {isSearchOpen ? (
        <>
          <TouchableOpacity activeOpacity={0.5} onPress={closeSearch}>
            <Icon source={R.image.back} />
          </TouchableOpacity>
          <InputWrapper>
            <Input
              placeholderTextColor={R.color.search.placeholder}
              autoFocus
              placeholder={R.string.search.placeholder}
              autoCapitalize="none"
              onChangeText={(newText: string) => setText(newText)}
              value={text}
            />
            {text.length !== 0 && (
              <TouchableOpacity activeOpacity={0.5} onPress={search}>
                <Icon source={R.image.cancel} />
              </TouchableOpacity>
            )}
          </InputWrapper>
        </>
      ) : (
        <>
          <StyledText bolded={true}> Home</StyledText>
          <TouchableOpacity activeOpacity={0.5} onPress={search}>
            <Icon source={R.image.search} />
          </TouchableOpacity>
        </>
      )}
    </StyledContainer>
  )
}

export default SearchBar
