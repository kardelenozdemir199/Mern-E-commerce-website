import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "./Foradmin.css";
import React, { Component } from "react";

const Admin = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  const [file, setFile] = useState([]);
  const [files, setFiles] = useState([]);
  const [sil, setsil] = useState([]);
  const [silca, setsilca] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/admin")
      .then((result) => setFile(result.data));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/addcategories")
      .then((result) => setFiles(result.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/delete/" + path)
      .then((response) => {
        setsil(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [path]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/deleteca/" + path)
      .then((response) => {
        setsilca(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [path]);
  return (
    <div class="adminport">
      <div class="altnavbar">
        <Link to="/addd">
          <p class="productbir">product add</p>
        </Link>
        <Link to="/adddcategories">
          <p class="productiki">category add</p>
        </Link>
      </div>
      <h2>Admin Page</h2>
      <div class="adminortalama">
        <h4 class="productuc">Category</h4>
        <div class="adminpageforoneside">
          {files.map((item) => {
            return (
              <table class="dne">
                <tr>
                  <td>category</td>
                  <td> {item.category}</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    <Link to={`/admin/deleteca/${item.category}`}>
                      <button>delete</button>
                    </Link>
                  </td>
                </tr>
              </table>
            );
          })}
        </div>
        <h4>Product</h4>
        <div class="adminpagefortoside">
          {file.map((item) => {
            return (
              <table class="dne">
                <tr>
                  <td>title</td>
                  <td> {item.title}</td>
                </tr>
                <tr>
                  <td>text</td>
                  <td>{item.text}</td>
                </tr>
                <tr>
                  <td>category</td>
                  <td>{item.category}</td>
                </tr>
                <tr>
                  <td>price</td>
                  <td>{item.price}</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    <Link to={`/admin/delete/${item.title}`}>
                      <button>delete</button>
                    </Link>
                    <button>Update</button>
                  </td>
                </tr>
              </table>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Admin;
