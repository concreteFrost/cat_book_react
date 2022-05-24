import user_img from "../DialogueItem/user.jpg";
import d from "../DialogueItem/DialogueItem.module.css";
import {NavLink } from "react-router-dom";

const DialogueItem = (props) => {
 
  const changeId =()=>{
    props.changeId(props.id)
  }

  return (
    <NavLink  onClick={changeId} to={"/dialogues/" + props.id} className={({isActive})=> isActive ? d.item_active : d.item}>
      <div>
        <img src={user_img} alt="" />
      </div>
      <div>{props.name}</div>
    </NavLink>
  );
};

export default DialogueItem;
