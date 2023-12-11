import React, {useContext} from 'react';
import { LangContext } from '../App';

export default function Score(props) {

    const lang = useContext(LangContext);
    //let s = {props.score}
    //let score = "Score: " + s;

    return (
        <section className="main" id="mainSection">
           <h5>{lang.dictionary["Score"]}: {props.score} </h5> 
        </section>
    )
}

//{props.score}