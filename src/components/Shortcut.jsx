import styles from "../assets/styles/Game.module.css";
import React from "react";

export default function Shortcut(props) {
   const onClick = () => {
       props.action(props.number-1)
    }
  return (
    <button
      className={styles.action}
      id = {props.id}
      onClick={onClick}
    >
      {props.number}
    </button>
  );
}
