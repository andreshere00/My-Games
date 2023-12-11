import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import TicTacToe from "../pages/TicTacToe.js";
import Quiz from "../pages/Quiz";
import Home from "../pages/Home";
import "../assets/styles/Navbar.module.css";
import LangSelector from "../LangSelector";
import { useContext } from "react"; 
import { LangContext } from "../App";

export default function Navbar(props)  {
  const lang = useContext(LangContext); 
    return (
      <Router>
        <div className="container">
          <h1>{lang.dictionary["My games"]}</h1>
          <hr />
          <nav className="Navbar" role = "tablist">
            <ul>
              <li><NavLink to= "/">{lang.dictionary["Home"]}</NavLink></li>
              <li><NavLink to= "/tictactoe">{lang.dictionary["TicTacToe"]}</NavLink></li>
              <li><NavLink to= "/quiz">Quiz</NavLink></li>
              <LangSelector />
            </ul>
          </nav>
          <Routes key = "routes">
            <Route key={0} path = "/" element = {<Home lang = {props.lang}/>}>Home</Route>
            <Route key={1} path = "/tictactoe" element = {<TicTacToe />}>TicTacToe</Route>
            <Route key={2} path = "/quiz" element = {<Quiz />}>Quiz</Route>
          </Routes>
        </div>
      </Router>
    );
  }