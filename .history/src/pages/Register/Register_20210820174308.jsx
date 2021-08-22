import React from "react";

import HeaderRegister from "../../components/HeaderRegister/HeaderRegister";
import Input from '../../components/Input/Input'

import "./Register.css";

export default function Register() {
  return (
    <div className="register_container">
      <div className="header-container">
        <HeaderRegister/>
      </div>
    </div>
  );
}
