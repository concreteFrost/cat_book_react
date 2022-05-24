import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";

class UserPage extends React.Component {
  fetcher = () => {
    axios
      .get(
        "https://social-network.samuraijs.com/api/1.0/profile/" +
          this.props.state.userId
      )
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
        this.props.dispatch({ type: "set-user", data: data });
      });
  };

  componentDidMount() {
    this.fetcher();
  }

  render() {
    return (
      <div>
        {this.props.state.data.fullName}
        hh
      </div>
    );
  }
}

export default UserPage;
