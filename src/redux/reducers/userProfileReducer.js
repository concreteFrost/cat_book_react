import { act } from "react-dom/test-utils";

let initialState = {
  userId: null,
  data:{}
};
  
  export const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
     case 'set-user-id':
       state.userId = action.id;
       break;
      case 'set-user':
        state.data = action.data
    }
  
    return state;
  };
  