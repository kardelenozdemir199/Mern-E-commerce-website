import React, { Component } from "react";
import axios from "axios";
import "./App.css"
export default class Categoryadd extends Component {
  constructor(props) {
    super(props);
    this.onChangecategory = this.onChangecategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      category: "",
    };
  }
  onChangecategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const posts = {
      category: this.state.category,
    };
    console.log(posts);
    axios
      .post("http://localhost:3000/admin/addcategories", posts)
      .then((res) => console.log(res.data));
    window.location = "/";
  }

  render() {
    return (
      <div class="categoryadd">
        <h3>Create New product Log</h3>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="category"
            placeholder="category"
            value={this.state.category}
            onChange={this.onChangecategory}
          />

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
