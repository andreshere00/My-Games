import React from "react";
import es from './es.json';
import en from './en.json';


export const LangContext = React.createContext({userLang: 'es', dictionary:es});
export const LangContext = React.createContext({userLang: 'en', dictionary:en});