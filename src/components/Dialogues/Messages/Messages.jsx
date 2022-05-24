import m from '../Messages/Message.module.css'

const Message = (props) => {
  let messagesMapped = props.messages.map((i)=>{
    if(i.author){
      return <div key={i.id} className= {m.my_message}>{i.message}</div>
    }
    else{
    return <div key={i.id} className= {m.message}>{i.message}</div>}
  })

    return(<div className={m.container}>
      <div className={m.sender}>{props.name}</div>
     <div >{messagesMapped}</div>
     </div>
    )
  };

export default Message;
  