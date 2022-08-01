export interface ISearchResultPayload {
  items: Array<{
    id: string
    name: string
    bio: string
    login: string
    avatarUrl: string
  }>
}

export interface ISearchLoadingPayload {
  loading: boolean
}

export interface ISearchState {
  result: Array<{
    id: string
    name: string
    bio: string
    login: string
    avatarUrl: string
  }>
  hasMore: boolean
  page: number
  loading: boolean
}

export enum SearchType {
  User = "user",
  Organization = "org",
}
