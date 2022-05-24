import MyPosts from "./MyPosts";

const MyPostContainer = (props) => {
  function addPost() {
    props.dispatch({ type: "add-post" });
    props.dispatch({ type: "set-post-text", text: "" });
  }
  function changePostText(text) {
    props.dispatch({ type: "set-post-text", text: text });
  }

  function deletePost(id) {
    props.dispatch({ type: "delete-post", id: id });
  }
  return (
    <MyPosts
      changePostText={changePostText}
      addPost={addPost}
      deletePost={deletePost}
      defaultText={props.defaultText}
      post={props.post}
    ></MyPosts>
  );
};

export default MyPostContainer;
