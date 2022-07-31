export interface IServerSearchParams {
  q: string
}

export interface IServerSearchPayload {
  total_count: number
  incomplete_results: boolean
  items: Array<{
    id: string
    name: string
    bio: string
    login: string
    avatar_url: string
  }>
}
