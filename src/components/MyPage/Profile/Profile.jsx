import React from "react";
import s from '../Profile/Profile.module.css'

function Profile(props){
    return(
        <div className={s.profile}>
            <img className={s.img} src={props.image} alt="" />
            <h3 className={s.name}>{props.name}</h3>
            <h5 className={s.info}>{props.info}</h5>
        </div>
    )
}

export default Profile;