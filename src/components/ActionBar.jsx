import Button from "./Button.jsx"
import styles from "../assets/styles/ActionBar.module.css"
import { LangContext } from '../App';
import React, { useContext } from 'react';

export default function ActionBar(props) {

    const lang = useContext(LangContext);

    let back = "back";
    let reset = "reset";
    let next = "next"; 
    let submit = "submit";
    
    return (
    <div>
        <Button id = {back} text = {lang.dictionary["back"]} action = {props.back} quiz = {props.quiz}/>
        <Button id = {submit} text = {lang.dictionary["submit"]} action = {props.submit} quiz = {props.quiz}/>
        <Button id = {reset} text = {lang.dictionary["reset"]} action = {props.reset} quiz = {props.quiz}/>
        <Button id = {next} text = {lang.dictionary["next"]} action = {props.next} quiz = {props.quiz}/>
    </div>
    )
}

