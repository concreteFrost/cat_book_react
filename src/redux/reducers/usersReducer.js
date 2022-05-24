
let initialState = {
  users: [],
  limit: 5,
  defaultLimit: 5,
  isLoading : true
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "follow-user":
      state.users.forEach((e) => {
        if (e.id === action.id) {
          e.followed = true;
        }
      });

      break;
    case "unfollow-user":
      state.users.forEach((e) => {
        if (e.id === action.id) {
          e.followed = false;
        }
      });

      break;
    case "set-users":
      state.users = action.users;
      break;
    case 'show-more':
      state.limit +=action.limit;
    break;
    
    case 'set-default-limit':
      state.limit = state.defaultLimit

    case 'is-loading':
      state.isLoading =  action.isLoading
      console.log(state.isLoading)
  }

  return state;
};
