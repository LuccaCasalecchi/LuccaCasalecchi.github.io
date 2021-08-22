import React from "react";
import Header from "../../components/Header/Header";
import Illustration from "../../images/Illustration.svg";
import Input from "../../components/Input/Input";
import "./LandingPage.css";
import Recipes from "../../components/Recipes/Recipes";

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className="search-recipes">
        <div className="subtitle">
          <h2>Ready for<br />Trying a New<br />Recipe ?</h2>
          <div className="input-container">
          <Input/>
          </div>
        </div>
        <img src={Illustration} alt="" />
      </div>
      <Recipes/>
    </>
  );
}
