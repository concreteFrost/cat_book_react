import React from "react";
import Post from "./Post/Post";
import s from "../MyPosts/MyPosts.module.css";


function MyPosts(props) {
  let postMapped;

  if (props.post.length > 0) {
    postMapped = props.post
      .sort((a, b) => {
        return a.id > b.id ? -1 : 1;
      })
      .map((e) => {
        return (
          <Post
            id={e.id}
            key={props.post.indexOf(e)}
            post={e.post}
            deletePost ={props.deletePost}
          />
        );
      });
  } else {
    postMapped = <div className={s.empty_wall}>Seems to be quite here...</div>;
  }
  let textArea = React.createRef();

  function addPost() {
    props.addPost();
   
  }

  function updatePostText() {
    let txt = textArea.current.value;
    props.changePostText(txt)
  }
  return (
    <div id="myposts">
      <h3 className={s.new_post_title}>New Post</h3>
      <div className={s.submit_post}>
        <form>
          <textarea
            className={s.new_post_value}
            maxLength={2000}
            ref={textArea}
            cols={30}
            rows={5}
            value={props.defaultText}
            onChange={updatePostText}
          ></textarea>
          <input
            className={s.new_post_submit_button}
            type="button"
            value="submit"
            onClick={addPost}
          />
        </form>
      </div>
      {postMapped}
    </div>
  );
}

export default MyPosts;
