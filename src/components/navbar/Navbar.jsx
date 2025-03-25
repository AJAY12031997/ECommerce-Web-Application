import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./navbar.css";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import { useState } from "react";

const Navbar = () => {
  const quantity=useSelector(state=>state.cart.quantity)
  console.log(quantity)
  const [loginButtonPopup, setloginButtonPopup]=useState(false);
  const [registerButtonPopup, setregisterButtonPopup]=useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="left">
          <span className="language">EN</span>
          <div className="searchContainer">
            <input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="center">
          <h1 className="logo">AJAY.</h1>
        </div>
        <div className="right">
        {/* <Link to="/register"><div className="menuItem">REGISTER</div></Link> */}
        <button onClick={()=>setregisterButtonPopup(true)} className="menuItem">REGISTER</button>
        <Register trigger={registerButtonPopup} setTrigger={setregisterButtonPopup}>
        </Register>
        {/* <Link to="/login"><div className="menuItem">SIGN IN</div></Link> */}
        <button onClick={()=>setloginButtonPopup(true)} className="menuItem">SIGN IN</button>
        <Login trigger={loginButtonPopup} setTrigger={setloginButtonPopup}>
        </Login>
          <Link to="/cart">
          <div className="menuItem">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
