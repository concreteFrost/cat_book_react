import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyPage from "./components/MyPage/MyPage";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import News from "./components/News/News";
import "./css/App.css";
import UsersPage from "./components/Users/UsersPage";
import UserPage from "./components/Users/UserPage/UserPage";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar  />
      <Routes>
        <Route
          path="/"
          element={<MyPage state={props.state} dispatch={props.dispatch} />}
        />
        <Route
          path="/dialogues/*"
          element={
            <DialoguesContainer
              state={props.state.dialoguesPage}
              dispatch={props.dispatch}
            />
          }
        />
         <Route path="/users/*" element={<UsersPage state={props.state.usersPage} dispatch={props.dispatch}/>} />
        <Route path="/news" element={<News />} />
        <Route path= {"/"+props.state.userProfile.userId} element={<UserPage dispatch={props.dispatch} state={props.state.userProfile}></UserPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
