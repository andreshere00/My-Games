import Navbar from "./components/Navbar.jsx"
import es from './es.json';
import en from './en.json';
import React, {useState} from 'react';

const dictionaryList = { en, es };
export const LangContext = React.createContext({userLang: 'es', dictionary: es});

function App()  {
  const [lang, setLang] = useState('es');
  const handleLanguageChange = (event) => {
		setLang(event.target.value);
	}
  return (
    <div>
    <LangContext.Provider value={{handleLanguageChange: handleLanguageChange, userLang: lang, dictionary: dictionaryList[lang]}}>
    <Navbar value={{handleLanguageChange: handleLanguageChange, userLang: lang, dictionary: dictionaryList[lang]}} lang = {lang}/>
    </LangContext.Provider>
    </div>
  )
}

export default App;
