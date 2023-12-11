import styles from "../assets/styles/Answer.module.css"
import React from "react";

export default function Answer(props) {

    return (
        <div className = {styles.answerCont} key = "answer">
            <input type="text" className="answer" id = "useranswer" onClick = {props.remove}></input>
        </div>
    )
}



