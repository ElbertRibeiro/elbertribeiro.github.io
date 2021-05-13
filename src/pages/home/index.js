import React from 'react';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Project from '../../components/Project';
//import ButtonBurger from '../../components/Burger';


export default function Home() {
    /*let menu;
    var windowWidth = window.innerWidth;

    if (windowWidth > 800){
        menu = <Navbar page="/english" text1="Projetos" text2="Currículo" text3="English" />
    } else {
        menu = <ButtonBurger />
    }*/

    return (
        <div>
            <Navbar page="/english" text1="Projetos" text2="Currículo" text3="English" />
            <Header subtitle="Desenvolvedor Web" />
            <Project />
        </div>
    );
}