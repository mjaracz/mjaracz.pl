//@flow

const InitialState = {
  loading: false,
  data: [],
  error: {}
};
type Store = typeof(InitialState)

const projectsReducer = (state: Store = InitialState, action) => {
  switch (action.type) {
    case 'GET_PROJECTS': {
      return({
        ...state,
        loading: true
      })
    }
    case 'FETCH_PROJECTS': {
      return({
        ...state,
        loading: false,
        data: action.payload
      })
    }
    case 'ERROR_PROJECTS': {
      return({
        ...state,
        loading: true,
        data: [],
        error: action.payload
      })
    }
    default: {
      return state
    }
  }
};

export default projectsReducer;
