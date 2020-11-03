import {SAVE_POST} from './action';

const initialState = {
  savedPosts: [],
};

export default (state = initialState, action) => {
  if (action.type === SAVE_POST) {
    return {
      savedPosts: [...state.savedPosts, action.payload],
    };
  }
  return state;
};
