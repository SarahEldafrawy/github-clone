export interface ISearchBarProps {
  isSearchOpen: boolean
  setIsSearchOpen: (val: boolean) => void
  text: string
  setText: (val: string) => void
}
