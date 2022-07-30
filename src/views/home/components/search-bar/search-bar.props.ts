import { AppRoute } from "@github/navigation/routes"
import { IRootNavigationProp } from "@github/navigation/types"

export interface ISearchBarProps {
  navigation: IRootNavigationProp<AppRoute.Home>
  isSearchOpen: boolean
  setIsSearchOpen: (val: boolean) => void
  text: string
  setText: (val: string) => void
}
