export const SAVE_POST = 'SAVE_POST';

export const savePost = (data) => ({
  type: SAVE_POST,
  payload: data,
});
