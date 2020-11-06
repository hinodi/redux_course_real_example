export const SAVE_POST = 'SAVE_POST';
export const UN_SAVE_POST = 'UN_SAVE_POST';

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
