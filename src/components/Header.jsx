import React, {useContext} from 'react';
import {Card} from 'react-bootstrap';
import styles from "../assets/styles/Header.module.css"
import { LangContext } from '../App';

export default function Header(props) {
  const lang = useContext(LangContext);
    return (
      <Card className = {styles.card}>
        <Card.Body>
          <Card.Title>{lang.dictionary["Turn"]}</Card.Title>
          <Card.Text>
            {lang.dictionary[props.text]}     
          </Card.Text>
        </Card.Body>
      </Card>
    );
    }