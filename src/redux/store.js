import { homePageReducer } from "./reducers/homePageReducer";
import { dialoguesPageReducer } from "./reducers/dialoguesPageReducer";

export const store = {
  state: {
    homePage: {
      newPostText: "",
      no_posts: "Seems to be quite here...",
      posts: [{ id: 0, post: "My first post!" }],
    },
    dialoguesPage: {
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
      
    },
  }, 

  getState() {
    return this.state;
  },

  dispatch(action) {
   this.state.homePage= homePageReducer(this.state.homePage,action)
   this.state.dialoguesPage= dialoguesPageReducer(this.state.dialoguesPage,action)
   this.renderEntireTree(this.state)
  },

  renderEntireTree() {},
  subscribe(observer) {
    this.renderEntireTree = observer;
  },
};
export default store;
