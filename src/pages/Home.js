import React, { useContext } from 'react';
import { LangContext } from '../App';

export default function Home(props) {
  console.log(props.lang);
  const lang = useContext(LangContext);
    return (
      <div>
        <h2>{lang.dictionary["Hola, Bienvenido a la página web de Minijuegos en React."]}</h2><br/>
        <h3>{lang.dictionary["En esta página podrás jugar a diferentes juegos."]}</h3>
        <h3>{lang.dictionary["Haz click en la pestaña del juego al que quieras jugar."]}</h3><br/>
        <img src = {props.lang === "es" ? "https://www.masgamers.com/wp-content/uploads/2020/11/Among-Us-foto-1-1.jpg" : "https://hablemosdeempresas.com/wp-content/uploads/sites/2/2021/01/among-us.png"} alt = "among us"></img>
      </div>
    );
}