import React from "react";
import { Link } from "react-router-dom";
import UserPage from "../UserPage/UserPage";
import u from "./User.module.css";

const User = (props) => {

  let followUnfollow;
  let c;

  if (props.followed) {
    c = "unfollow";
    followUnfollow = () => {
      props.dispatch({ type: "unfollow-user", id: props.id });
    };
  } else if (!props.followed) {
    c = "follow";
    followUnfollow = () => {
      props.dispatch({ type: "follow-user", id: props.id });
    };
  }
  return (
    <div className={u.container}>
      <div className={u.name}>
      <Link onClick={()=>{props.dispatch({type:'set-user-id',id:props.id})}} to={"/"+props.id}><h4>{props.name}</h4></Link>
      </div>
      
      <div className={u.status}>{props.status}</div>
      <button className={u.follow_btn} onClick={followUnfollow}>
        {c}
      </button>
      
    </div>
  );
};

export default User;
