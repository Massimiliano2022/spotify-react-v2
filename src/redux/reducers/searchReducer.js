import { GET_QUERY_RESULT } from "../actions";

const initialState = {
    queryResult:[]
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUERY_RESULT:
            return {
                ...state,
                queryResult:
                  action.payload
              }
        default:
            return state;
    }
};

export default searchReducer;