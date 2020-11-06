export const SAVE_POST = 'SAVE_POST';
export const UN_SAVE_POST = 'UN_SAVE_POST';
export const GET_LIST_POST = 'GET_LIST_POST';

export const savePost = (data) => ({
  type: SAVE_POST,
  payload: data,
});

//action creator\
export const unSavePost = (data) => ({
  type: UN_SAVE_POST,
  payload: data,
});

export const savePostAsync = (data) => (dispatch) => {
  setTimeout(() => {
    // dispatch({
    //   type: SAVE_POST,
    //   payload: data,
    // });
    dispatch(savePost(data));
  }, 5000);
};

export const getListPost = () => (dispatch, getState) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: GET_LIST_POST,
        payload: json,
      });

      console.log(getState());
    })
    .catch((error) => {
      console.error(error);
    });
};
