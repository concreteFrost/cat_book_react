import React from "react";
import s from "../Post/Post.module.css";
import cat from "../../../../img/cat-profile.jpg";


function Post(props) {
    console.log(props)
  function deletePost(){
    props.deletePost(props.id)
  }
  return (
    <div className={s.post}>
      <img src={cat} className={s.img} alt={props.alt} />
      <p className={s.text}>{props.post}</p>
      <button className={s.delete_post_button} onClick={deletePost}>
        x
      </button>
    </div>
  );
}

export default Post;
