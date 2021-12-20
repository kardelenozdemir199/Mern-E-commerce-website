import "./Login.css";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
const Login = ({ kayit, setkayit }) => {
  const [people, setpeople] = useState({ username: "", password: "" });
  const [name, setname] = useState("");
  const [parola, setparola] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/user/").then((response) => {
      setpeople(response.data);
      console.log(people);
    });
  }, []);

  const senditlogin = () => {
    for (var i = 0; i < people.length; i++) {
      if (people[i].username === name && people[i].password === parola) {
        setkayit({ username: name, password: parola });
      } else {
        //setkayit("")
      }
    }
  };
  function senditlogout() {
    setkayit({ username: "", password: "" });
  }
  return (
    <div class="Loginholder">
      <p>login,</p>
      <p>Kardelen.com’a giriş yap veya hesap oluştur, indirimleri kaçırma!</p>
      <div class="logged">
        <form class="loginform">
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setname(e.target.value)}
          />
          <label>Parola</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setparola(e.target.value)}
          />
          <div class="btnsideforlogin">
            <button onClick={() => senditlogin()}>Giriş Yap</button>
           
          </div>
          <button class="cikisyap" onClick={() => senditlogout()}>Çıkış Yap</button>
          <Link to="/register">üye ol</Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
