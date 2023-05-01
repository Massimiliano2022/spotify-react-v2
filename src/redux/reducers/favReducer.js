import { ADD_FAV_ALBUM, REMOVE_FAV_ALBUM} from "../actions";

const initialState = {
    favourite: {
        albums: [],
      }
};

const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV_ALBUM:
            return {
                ...state,
                favourite: {
                  ...state.favourite,
                  albums: [...state.favourite.albums, action.payload],
                },
              }
            case REMOVE_FAV_ALBUM:
              return {
                ...state,
                favourite: {
                  ...state.favourite,
                  albums: state.favourite.albums.filter((fav) => fav.id !== action.payload.id),
                },
              }
        default:
            return state;
    }
};

export default favReducer;