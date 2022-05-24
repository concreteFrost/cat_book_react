let initialState ={newPostText: "",
no_posts: "Seems to be quite here...",
posts: [{ id: 0, post: "My first post!" }]}

export const homePageReducer = (state=initialState, action) => {
  switch (action.type) {
    case "add-post":
      let newPost = {
        id: state.posts.length,
        post: state.newPostText,
      };
      if (state.newPostText.trim().length > 0) {
        state.posts.push(newPost);
      }
      break;
    case "set-post-text":
      state.newPostText = action.text;

      break;
    case "delete-post":
      state.posts = state.posts.filter(
        (a) => a.id !== action.id
      );
      break;
  }

  return state;
};
