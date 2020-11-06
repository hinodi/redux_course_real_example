import {SAVE_POST, UN_SAVE_POST, GET_LIST_POST} from './action';

const initialState = {
  savedPosts: [],
  listPosts: [],
};

export default (state = initialState, action) => {
  if (action.type === SAVE_POST) {
    return {
      ...state,
      savedPosts: [...state.savedPosts, action.payload],
    };
  }
  if (action.type === UN_SAVE_POST) {
    return {
      ...state,
      savedPosts: state.savedPosts.filter(
        (post) => post.id !== action.payload.id,
      ),
    };
  }
  if (action.type === GET_LIST_POST) {
    return {
      ...state,
      listPosts: action.payload,
    };
  }
  return state;
};
