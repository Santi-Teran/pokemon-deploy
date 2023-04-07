import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import style from './Home.module.css';
import Footer from "../../components/Footer/Footer";

const Home = () => {

    return (
        <div className={style.container}>
            <div className={style.navBar}><NavBar /></div>
            <div className={style.searchBar}><SearchBar /></div>
            <div className={style.cardsContainer}><CardsContainer /></div>
            <div className={style.footer}><Footer /></div>
        </div>
    );
};

export default Home;