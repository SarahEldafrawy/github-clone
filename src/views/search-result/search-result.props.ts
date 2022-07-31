import { AppRoute } from "@github/navigation/routes"
import { IRootNavigationProp, IRootRoutProp } from "@github/navigation/types"

export interface ISearchResultProps {
  navigation: IRootNavigationProp<AppRoute.SearchResult>
  route: IRootRoutProp<AppRoute.SearchResult>
}
