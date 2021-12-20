import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onChangeusername = this.onChangeusername.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
    };
  }
  onChangeusername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangepassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(user);
    axios
      .post("http://localhost:3000/user/add", user)
      .then((res) => console.log(res.data));
      window.location = "/";
  }

  render() {
    return (
      <div class="Loginholder">
        <p>register,</p>
        <p>Kardelen.com’a giriş yap veya hesap oluştur, indirimleri kaçırma!</p>
        <div class="logged">
          <form class="loginform" onSubmit={this.onSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.onChangeusername}
            />
            <label>Parola</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.onChangepassword}
            />
            <input type="submit" value="submit" />
            <Link to="/login">already u have account</Link>
          </form>
        </div>
      </div>
    );
  }
}
