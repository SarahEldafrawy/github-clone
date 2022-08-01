import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { takeLatest, put } from "redux-saga/effects"
import _ from "lodash"
import { SagaManager } from "@github/state/ducks/shared"
import { searchEndpoint, IResponse, ISearchPayload } from "@github/services"
import { ExtractActionType } from "@github/utils"
import { ISearchState, ISearchResultPayload, ISearchLoadingPayload } from "./search.types"

// actions
export const searchAction = createAction(
  "search",
  ({ searchString, type, page }: { searchString: string; type: string; page: number }) => ({
    payload: { q: `${searchString} type:${type}`, page },
  }),
)

// Reducer
const initialState: ISearchState = {
  result: [],
  hasMore: true,
  page: 1,
  loading: false,
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResult: (state, { payload: { items } }: PayloadAction<ISearchResultPayload>) => {
      if (items.length > 0) {
        state.result = _.uniqBy([...state.result, ...items], "id") //api returns duplicate elements
        state.page++
      } else {
        state.hasMore = false
      }
    },
    clearResult: (state) => {
      state.result = []
      state.page = 1
      state.hasMore = true
    },
    setSearchLoading: (state, { payload: { loading } }: PayloadAction<ISearchLoadingPayload>) => {
      state.loading = loading
    },
  },
})

export const { setSearchResult, clearResult, setSearchLoading } = searchSlice.actions
export const searchReducerName = searchSlice.name
export default searchSlice.reducer

// Saga
function* prepare({ payload: { q, page } }: ExtractActionType<typeof searchAction>) {
  yield put(setSearchLoading({ loading: true }))
  return {
    q,
    page,
  }
}

function* postRequest(response: IResponse<ISearchPayload>) {
  if (response.ok) {
    yield put(setSearchResult(response.data))
  }
  yield put(setSearchLoading({ loading: false }))
  return response
}

const search = SagaManager.apiGenerator({
  endpoint: searchEndpoint,
  prepare,
  post: postRequest,
})

export function* searchSubscription() {
  yield takeLatest(searchAction.type, search)
}
