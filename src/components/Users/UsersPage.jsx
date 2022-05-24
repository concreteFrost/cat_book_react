import React from "react";
import User from "./User/User";
import axios from "axios";

class UsersPage extends React.Component {

  fetcher =()=>{
    this.props.dispatch({type:'is-loading', isLoading: true})
    axios
      .get(
        "https://social-network.samuraijs.com/api/1.0/users?count=" +
          this.props.state.limit
      )
      .then((res) => {
        return res.data.items;
      })
      .then((data) => {
        this.props.dispatch({type:'is-loading', isLoading: false})
        this.props.dispatch({ type: "set-users", users: data });
      });
  }
  componentDidMount() {
    this.fetcher()
  }

  showMore() {
    this.props.dispatch({ type: "show-more", limit: 5 });
    this.fetcher()
  }
  
  componentWillUnmount(){
    this.props.dispatch({ type: "set-default-limit"});
  }

  render() {
    return (
      <div>{this.props.state.isLoading ? <p>Loading</p> : null}
        {this.props.state.users.map((e) => {
          return (
            <User
              key={e.id}
              id={e.id}
              followed={e.followed}
              name={e.name}
              status={e.status}
              dispatch={this.props.dispatch}
            ></User>
          );
        })}
        <button onClick={()=>{this.showMore()}}>Show More</button>
      </div>
    );
  }
}

export default UsersPage;
