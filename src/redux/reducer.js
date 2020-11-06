import {SAVE_POST, UN_SAVE_POST} from './action';

const initialState = {
  savedPosts: [],
};

export default (state = initialState, action) => {
  if (action.type === SAVE_POST) {
    return {
      savedPosts: [...state.savedPosts, action.payload],
    };
  }
  if (action.type === UN_SAVE_POST) {
    return {
      savedPosts: state.savedPosts.filter(
        (post) => post.id !== action.payload.id,
      ),
    };
  }
  return state;
};
