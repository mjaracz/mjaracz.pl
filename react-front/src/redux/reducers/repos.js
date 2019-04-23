//@flow

const InitialState = {
  loading: false,
  reposData: [],
  error: {}
};
type Store = typeof(InitialState)

const reposReducer = (state: Store = InitialState, action) => {
  switch (action.type) {
    case 'GET_REPOS': {
      return({
        ...state,
        loading: true
      })
    }
    case 'FETCH_REPOS': {
      return({
        ...state,
        loading: false,
        reposData: action.payload
      })
    }
    case 'ERROR_REPOS': {
      return({
        ...state,
        loading: true,
        reposData: [],
        error: action.payload
      })
    }
    default: {
      return state
    }
  }
};

export default reposReducer;
