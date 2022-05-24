import Dialogues from './Dialogues'

function DialoguesContainer(props) {
  function setUserId(id) {
    props.dispatch({ type: "set-current-user-id", currentUserId: id });
  }

  function setMessageText(txt) {
    props.dispatch({ type: "set-message-text", text: txt });
  }

  function sendMessage() {
    let currentUserId = props.dispatch({ type: "get-current-user-id" });
    props.dispatch({ type: "add-message", id: currentUserId });
    props.dispatch({ type: "set-message-text", text: "" });
  }

  return <Dialogues setUserId={setUserId} setMessageText={setMessageText} sendMessage={sendMessage} state={props.state}/>
}

export default DialoguesContainer;
