export interface ISearchResultPayload {
  items: Array<{
    id: string
    name: string
    bio: string
    login: string
    avatarUrl: string
  }>
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
}
