import DialogueItem from "./DialogueItem/DialogueItem";
import s from "../Dialogues/Dialogues.module.css";
import Message from "./Messages/Messages";
import SendMessage from "./SendMessage/SendMessage";
import { Routes, Route } from "react-router-dom";

function Dialogues(props) {
  
  let dialoguesMapped = props.state.dialogues.map((i) => {
    return (
      <DialogueItem
        changeId={props.setUserId}
        name={i.name}
        id={i.id}
        key={i.id}
        messages={i.messages}
      ></DialogueItem>
    );
  });

  let messagesMapped = props.state.dialogues.map((i) => {
    return (
      <Route
      key={i.id}
       path={'/' + i.id}
        element={<Message name={i.name} key={i.id} messages={i.messages}/>}
      ></Route>
    );
  });
  return (
    <div className={s.container}>
      <div className={s.contact_list}>{dialoguesMapped}</div>
      <div className={s.dialogue}>
        <Routes>{messagesMapped}</Routes>
      </div>
      <div className={s.send_message}>
        <SendMessage
          sendMessage={props.sendMessage}
          setText={props.setMessageText}
          defaultText={props.state.newMessageText}
        />
      </div>
    </div>
  );
}

export default Dialogues;
