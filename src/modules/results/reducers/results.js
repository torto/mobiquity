export const REQ_RESULTS_SUCESS = 'result/RESULTS_SUCESS'
export const REQ_RESULTS_ERROR = 'result/RESULTS_ERROR'
export const REQ_RESULTS_LOADING = 'result/RESULTS_LOADING'

const initialState = {
  data: [],
  loading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQ_RESULTS_SUCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null
      }
    case REQ_RESULTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.data
      }
    case REQ_RESULTS_LOADING:
      return {
        ...state,
        error: null,
        data: [],
        loading: true
      }
    default:
      return state
  }
}
