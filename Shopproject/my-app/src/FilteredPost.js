import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import React, { Component } from "react";
export default function FilteredPost({
  cate,
  setCate,
  pul,
  setPul,
  carto,
  setCarto,
}) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [katalog, setKatalog] = useState([]);

  const [ekip, setekip] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/addcategories")
      .then((response) => {
        setKatalog(response.data);
        console.log(this.state.katalog);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/admin/" + path)
      .then((response) => {
        setekip(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [path]);
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
                  {" "}
                  <li>{item.category} </li>
                </Link>
              </ul>
            </div>
          );
        })}
      </div>

      <div class="urunlerhold">
        {ekip.map((item) => {
          return (
            <div class="uruninsidehold">
               <div class="pichold">
              <img src={`../uploads/${item.photoname}`} class="imgstyle" />
              </div>
              <div class="uruntxt">
                <p class="uruntitle">{item.title}</p>
                <p class="uruntitleiki">{item.text}</p>
                <p class="uruntitleprice">{item.price} <span>TL</span></p>
               
              </div>
              <button onClick={() => goToBasket(item)}>sepete git</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
