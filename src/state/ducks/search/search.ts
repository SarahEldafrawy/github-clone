import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { takeLatest, put } from "redux-saga/effects"
import { SagaManager } from "@github/state/ducks/shared"
import { searchEndpoint, IResponse, ISearchPayload } from "@github/services"
import { ExtractActionType } from "@github/utils"
import { ISearchState, ISearchResultPayload } from "./search.types"

// actions
export const searchAction = createAction(
  "search",
  ({ searchString, type }: { searchString: string; type: string }) => ({
    payload: { q: `${searchString} type:${type}` },
  }),
)

// Reducer
const initialState: ISearchState = {
  result: [],
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResult: (state, { payload: { items } }: PayloadAction<ISearchResultPayload>) => {
      state.result = [...state.result, ...items]
    },
    clearResult: (state) => {
      state.result = []
    },
  },
})

export const { setSearchResult, clearResult } = searchSlice.actions
export const searchReducerName = searchSlice.name
export default searchSlice.reducer

// Saga
function* prepare({ payload: { q } }: ExtractActionType<typeof searchAction>) {
  return {
    q,
  }
}

function* postRequest(response: IResponse<ISearchPayload>) {
  if (response.ok) {
    yield put(setSearchResult(response.data))
  }
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
