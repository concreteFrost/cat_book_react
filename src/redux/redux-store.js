import { combineReducers,createStore } from "redux";
import {dialoguesPageReducer} from './reducers/dialoguesPageReducer'
import {homePageReducer} from './reducers/homePageReducer'
import {usersReducer} from './reducers/usersReducer'
import {userProfileReducer} from './reducers/userProfileReducer'

let redusers = combineReducers({
    homePage: homePageReducer,
    dialoguesPage: dialoguesPageReducer,
    usersPage: usersReducer,
    userProfile: userProfileReducer

})
let store = createStore(redusers);

export default store;