import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { AppRoute } from "@github/navigation/routes"

export enum SearchNavigation {
  People = "People",
  Organization = "Organizations",
}

export type IRootParamList = {
  [AppRoute.Home]: undefined
  [AppRoute.SearchResult]: { title: SearchNavigation; searchText: string }
}

type IRootRoute = keyof IRootParamList

export type IRootNavigationProp<R extends IRootRoute> = StackNavigationProp<IRootParamList, R>
export type IRootRoutProp<R extends IRootRoute> = RouteProp<IRootParamList, R>
