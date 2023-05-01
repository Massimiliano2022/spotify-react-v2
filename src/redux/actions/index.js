export const ADD_FAV_ALBUM = "ADD_FAV_ALBUM";
export const REMOVE_FAV_ALBUM = "REMOVE_FAV_ALBUM";
export const GET_QUERY_RESULT = "GET_QUERY_RESULT";

export const addToFavouriteAction = album => ({
  type: ADD_FAV_ALBUM,
  payload: album
});

export const removeFromFavouriteAction = album => ({
  type: REMOVE_FAV_ALBUM,
  payload: album
});

export const getSearchQueryAction = query => {

  return async dispatch => {
    try {
      const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;
      let resp = await fetch(url);

      if (resp.ok) {
        let { data } = await resp.json();

        dispatch({ type: GET_QUERY_RESULT, payload: data });
      
      }
    } catch (error) {
      console.log(error);
    }
  };
};


