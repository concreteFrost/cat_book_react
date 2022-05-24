import React from "react";
import s from "../MyPage/MyPage.module.css";
import mount from "../../img/mount1.jpg";
import cat_profile from "../../img/cat-profile.jpg";
import Profile from "./Profile/Profile";
import MyPostContainer from "./MyPosts/MyPostContainer";

function MyPage(props) {
  
  return (
    <div className="feed">
      <div>
        <img className={s.img} src={mount} alt="mo2untains" />
        <hr />
      </div>
      <Profile name="Ilia Morozov" image={cat_profile} info="City: London" />
      <MyPostContainer
        post={props.state.homePage.posts}
        defaultText={props.state.homePage.newPostText}
        dispatch = {props.dispatch}
      />
    </div>
  );
}

export default MyPage;
