import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import "./App.css";
const Homem = ({ cate, setCate, pul, setPul, carto, setCarto }) => {
  const [katalog, setKatalog] = useState([]);
  const [urunler, setUrunler] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/addcategories")
      .then((response) => {
        setKatalog(response.data);
        setCate(response.data);
        console.log(this.state.katalog);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/admin")
      .then((response) => {
        setUrunler(response.data);
        setPul(response.data);
        console.log(this.state.urunler);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const goToBasket = (product) => {
    let newCart = [...carto];
    let itemInCart = {
      ...product,
      quantity: 1,
    };
    newCart.push(itemInCart);
    setCarto(newCart);
  };
  return (
    <div class="homeproducthold">
      <div class="katologside">
        {cate.map((item) => {
          return (
            <div>
              <ul>
                <Link to={`/addmin/${item.category}`}>
                  <li>{item.category} </li>
                </Link>
              </ul>
            </div>
          );
        })}
      </div>

      <div class="urunlerhold">
      

        {pul.map((item) => {
          return (
            <div class="uruninsidehold">
              <div class="pichold">
                <img src={`../uploads/${item.photoname}`} class="imgstyle" />
              </div>

              <div class="uruntxt">
                <p class="uruntitle">{item.title}</p>
                <p class="uruntitleiki">{item.text}</p>
                <p class="uruntitleprice">
                  {item.price} <span>TL</span>
                </p>
              </div>

              <button onClick={() => goToBasket(item)}>sepete git</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Homem;
