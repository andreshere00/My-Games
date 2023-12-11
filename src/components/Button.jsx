import styles from "../assets/styles/Game.module.css";
import React from "react";

export default function Button(props) {

  return (
    <button
      className={styles.action}
      id={props.id}
      onClick={props.action}
    >
      {props.text}
    </button>
  );
}
