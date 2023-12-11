import React, {useContext} from 'react';
import {Button} from 'react-bootstrap';
import { LangContext } from '../App';

export default function Reset(props) {
  const lang = useContext(LangContext);
  function click() {
    props.resetClick();
  }

  return(
    <Button onClick={click} >
      {lang.dictionary["Reset"]}
    </Button>
  );
    
}