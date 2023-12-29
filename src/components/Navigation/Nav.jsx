import { FiHeart } from "react-icons/fi";
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Container } from "./styled.js";
import ProfileIcon from "../../img/ic_profile.png";
import LikeIcon from "../../img/ic_like.png";
import CarrinhoIcon from "../../img/ic_carrinho.png";
import LogoIcon from "../../img/ic_logo.png";
import Vector from "../../img/vector.png";
import { Link, Router, Route } from "react-router-dom"
import Home from "../../pages/Home/Home.jsx";



const Nav = ({ handleInputChange, query }) => {
  return (

    <Container>

      <div className="nav-container">
        <a href="/">
          <img src={LogoIcon} className="logo"></img>
        </a>

        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Buscar"
        />
        <img src={Vector} className="lupa" />
        
      </div>
      <h1>Bem vindo ao Game Quest World</h1>
      <div className="profile-container">
        Olá, faça o seu login.

        <a href="/login">
          <img src={ProfileIcon} className="nav-icons" />
        </a>

        <a href="">
          <img src={LikeIcon} className="nav-icons" />
        </a>
        <a href="#">
          <img src={CarrinhoIcon} className="nav-icons" />
        </a>

      </div>
    </Container>
  );
};

export default Nav;