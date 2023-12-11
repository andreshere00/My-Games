import Shortcut from "./Shortcut.jsx"
import styles from "../assets/styles/QuizBar.module.css"

export default function QuizBar(props) {
    
    return (
    <div>
        <nav className={styles.quizBar}>
            <Shortcut id = {"1"} number = {1} action = {props.index}/> 
            <Shortcut id = {"2"} number = {2} action = {props.index}/>  
            <Shortcut id = {"3"} number = {3} action = {props.index}/>  
            <Shortcut id = {"4"} number = {4} action = {props.index}/>  
            <Shortcut id = {"5"} number = {5} action = {props.index}/>  
            <Shortcut id = {"6"} number = {6} action = {props.index}/>    
            <Shortcut id = {"7"} number = {7} action = {props.index}/>  
            <Shortcut id = {"8"} number = {8} action = {props.index}/>  
            <Shortcut id = {"9"} number = {9} action = {props.index}/>  
            <Shortcut id = {"10"} number = {10} action = {props.index}/>   
        </nav>
    </div>
    )
}
