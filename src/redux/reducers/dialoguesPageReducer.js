let initialState={
  currentUserId: 0,
      newMessageText: "",
      dialogues: [
        {
          id: 0,
          name: "Alex",
          messages: [
            {
              id: 0,
              message: "Hey man!",
            },
            { id: 1, message: "How are you?" },
          ],
        },
        {
          id: 1,
          name: "Djin",
          messages: [
            {
              id: 0,
              message: "Hey man!",
            },
            { id: 1, message: "Wassup?" },
          ],
        },
        {
          id: 2,
          name: "Murik",
          messages: [
            {
              id: 0,
              message: "Salam!",
            },
            { id: 1, message: "What u up to?" },
          ],
        },
        {
          id: 3,
          name: "Sveta",
          messages: [
            {
              id: 0,
              message: "Hey man!",
            },
            { id: 1, message: "Long Time!!!!" },
          ],
        },
        {
          id: 4,
          name: "Oleg Ostapovich",
          messages: [
            {
              id: 0,
              message: "Hey man!",
            },
            { id: 1, message: "How are you?" },
          ],
        },
        {
          id: 5,
          name: "Dima",
          messages: [
            {
              id: 0,
              message: "Hey man!",
            },
            { id: 1, message: "How are you?" },
          ],
        },
      ]
      
}

export const dialoguesPageReducer = (state=initialState, action) => {
  switch (action.type) {
  
    case "set-current-user-id":
      state.currentUserId = action.currentUserId
      break;

    case "set-message-text": 
      state.newMessageText = action.text;
      break;

    case "add-message":
        
      let newMessageId = state.currentUserId;
      let myMessage = {
        id: state.dialogues[newMessageId].messages.length,
        message: state.newMessageText,
        author: true,
      };
      
      if (myMessage.message.length > 0 && state.currentUserId!==null) {
        state.dialogues[newMessageId].messages.push(myMessage);
      }
      break;
  }
  return state;
};
