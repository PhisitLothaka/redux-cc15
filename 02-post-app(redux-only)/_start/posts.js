const { createStore } = require("redux");
/*
 * post  = {id:number, title : string }
 *   post = Array <post>  == Array<{id:number, title : string }>
 */

// initialState
const initialState = {
  posts: [],
};
// Action
// - Action Type
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

// - Action Creator
const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

const deletePostAction = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId,
  };
};

const editPostAction = (postId, title) => {
  return {
    type: EDIT_POST,
    payload: { postId, title },
  };
};
// Reducer
const postReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    return { posts: [...state.posts, action.payload] };
  } else if (action.type === DELETE_POST) {
    const newPosts = state.posts.filter((post) => post.id !== action.payload);
    return { posts: newPosts };
  } else if (action.type === EDIT_POST) {
    const editPost = state.posts.filter(
      (post) => post.id === action.payload.postId
    );

    editPost[0]?.payload?.title = action.title;
    const newPost = { posts: [...state.posts, editPost] };
    return { posts: newPost };
  }
  return state;
};

// Store
const store = createStore(postReducer);

store.subscribe(() => {
  const state = store.getState();
  console.log(" >> ", state);
});

store.dispatch(addPostAction({ id: 1, title: "HTML" }));
store.dispatch(addPostAction({ id: 2, title: "CSS" }));
store.dispatch(addPostAction({ id: 3, title: "REACT" }));

store.dispatch(deletePostAction(2));

store.dispatch(editPostAction(1, "CSS"));
