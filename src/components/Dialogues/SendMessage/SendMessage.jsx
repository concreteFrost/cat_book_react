import s from "./SendMessage.module.css";
import React from "react";
import DialogueItem from '../DialogueItem/DialogueItem'

const SendMessage = (props) => {
  let c = React.createRef();
  let defColor;
 

  function hover() {
    defColor = c.current.style.backgroundColor;
    c.current.style.backgroundColor = "#bbc7bb";
  }
  function leave() {
    c.current.style.backgroundColor = defColor;
  }

  let r = React.createRef()

  function setMessageText(){
    let txt = r.current.value;
   props.setText(txt)
  }

  function sendMessage(){
    
    props.sendMessage()
  }
  return (
    <div className={s.container}>
      <textarea
        className={s.new_message_value}
        cols="30"
        rows="10"
        value={props.defaultText}
        onChange={setMessageText}
        ref={r}
      ></textarea>
      <button
        ref={c}
        className={s.new_message_submit_button}
        type="button"
        button="submit"
        value="send"
        onClick={sendMessage}
        onMouseOver={hover}
        onMouseLeave={leave}
      >
        send
      </button>
    </div>
  );
};

export default SendMessage;
