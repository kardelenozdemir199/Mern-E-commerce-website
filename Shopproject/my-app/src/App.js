import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbarside from "./Navbarside";
import { useContext, useEffect, useState } from "react";
import Admin from "./Admin";
import Adminadd from "./Adminadd";
import Categoryadd from "./Categoryadd";
import FilteredPost from "./FilteredPost";
import Basket from "./Basket";
import Homem from "./Homem";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
function App() {
  const [carto, setCarto] = useState([]);
  const [pul, setPul] = useState([]);
  const [cate, setCate] = useState([]);
  const [kayit, setkayit] = useState({ username: "", password: "" });
  useEffect(() => {
    const yeni = localStorage.getItem("carto");
    if (yeni) {
      setCarto(JSON.parse(yeni));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("carto", JSON.stringify(carto));
  });
  useEffect(() => {
    const Ka = localStorage.getItem("kayit");
    if (Ka) {
      setkayit(JSON.parse(Ka));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("kayit", JSON.stringify(kayit));
  });
  useEffect(() => {
    const pro = localStorage.getItem("pul");
    if (pro) {
      setPul(JSON.parse(pro));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("pul", JSON.stringify(pul));
  });
  useEffect(() => {
    const kategori = localStorage.getItem("cate");
    if (kategori) {
      setCate(JSON.parse(kategori));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cate", JSON.stringify(cate));
  });
  return (
    <div className="App">
      <Navbarside></Navbarside>
      <Route path="/" exact>
        <Homem
          cate={cate}
          setCate={setCate}
          pul={pul}
          setPul={setPul}
          carto={carto}
          setCarto={setCarto}
        ></Homem>
      </Route>
      <Route path="/admin">
        <Admin></Admin>
      </Route>
      <Route path="/addd">
        <Adminadd></Adminadd>
      </Route>
      <Route path="/adddcategories">
        <Categoryadd></Categoryadd>
      </Route>
      <Route path="/addmin/:id">
        <FilteredPost
          cate={cate}
          setCate={setCate}
          pul={pul}
          setPul={setPul}
          carto={carto}
          setCarto={setCarto}
        ></FilteredPost>
      </Route>
      <Route path="/basket">
        <Basket
          carto={carto}
          setCarto={setCarto}
          kayit={kayit}
          setkayit={setkayit}
        ></Basket>
      </Route>
      <Route path="/register">
        <Register></Register>
      </Route>
      <Route path="/login">
        <Login kayit={kayit} setkayit={setkayit}></Login>
      </Route>
      <Footer></Footer>
    </div>
  );
}
export default App;
