import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      katalog: [],
      urunler: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/admin/addcategories")
      .then((response) => {
        this.setState({ katalog: response.data });
        console.log(this.state.katalog);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/admin")
      .then((response) => {
        this.setState({ urunler: response.data });
        console.log(this.state.urunler);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Katolog</h1>

        <h2>selam</h2>
        {this.state.katalog.map((item) => {
          return (
            <div>
              <Link to={`/admin/${item.category}`}>{item.category}</Link>
            </div>
          );
        })}

        <h1>Urunler</h1>
        {this.state.urunler.map((item) => {
          return (
            <div>
              <p>{item.title}</p>
              <p>{item.text}</p>
              <p>{item.price}</p>
              <Link to={`/basket/${item.title}`}>
                {" "}
                <button type="submit">ekle</button>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
