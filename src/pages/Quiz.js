import React, { useState, useEffect } from "react";
import Game from "../components/Game.jsx";
import local from "../assets/mock-data.js"

export default function Quiz() {

  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quiz, setQuiz] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect( ()=> {
    const getQuizzes = async() => {
        const response = await fetch (
            "https://core.dit.upm.es/api/quizzes/random10wa?token=6f226febf9eb9f2fe02a"
        );
        const quizzes = await response.json();
          if (quizzes.length === 0) {
            setQuiz(local.quizzes);
            local.quizzes.map((quiz) => answer.push(quiz.answer))
            setLoaded(true);
            alert("Los quizzes no han sido cargados del servidor. Es por ello por lo que hemos cargado unos quizzes de reserva de nuestro archivo local.")
          }
        setQuiz(quizzes);
        console.log(quizzes);
        quizzes.map(() => answer.push(""));
        setLoaded(true);
        console.log(answer)
        
    };
    getQuizzes();  
}, []);

  const answer_user = () => {
    var input = document.getElementById("useranswer").value;
    answer.splice(currentQuiz, 1, input);
    console.log(input);
    setAnswer(answer);
    console.log(answer);
    document.getElementById("useranswer").value = answer[currentQuiz];
  };

  const backItem = () => {
    if (currentQuiz !== 0) {
      setCurrentQuiz(currentQuiz - 1);
    }
    if (document.getElementById("useranswer").value !== "") { answer_user(); }
    removeAnswer();
  };

  const nextItem = () => {
    if (currentQuiz !== quiz.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    }
    if (document.getElementById("useranswer").value !== "") { answer_user(); }
    removeAnswer();
  };

  const removeAnswer = () => {
    document.getElementById("useranswer").value = "";
  };

  function getIndex(index) {
    setCurrentQuiz(index)
  }

  const submitItem = () => {
    answer_user();
    let s = 0;
    quiz.forEach((element, index) => {
      console.log(element);
      console.log(index);
      console.log(element.answer);
      console.log(answer);
      if (element.answer.toLowerCase() === answer[index].toLowerCase()) {
        s++;
      }
    });
    setScore(s);
    setFinished(true);
    removeAnswer();
  };

  const resetItem = async () => {
    setScore(0);
    document.getElementById("useranswer").value = "";
    setAnswer([]);
      const response = await fetch (
          "https://core.dit.upm.es/api/quizzes/random10wa?token=6f226febf9eb9f2fe02a"
      );
      const quizzes = await response.json();
        if (quizzes.length === 0) {
          setQuiz(local.quizzes);
          local.quizzes.map((quiz) => answer.push(quiz.answer))
          setLoaded(true);
          alert("Los quizzes no han sido cargados del servidor. Es por ello por lo que hemos cargado unos quizzes de reserva de nuestro archivo local.")
        }
      setQuiz(quizzes);
      console.log(quizzes);
      setAnswer(["","","","","","","","","",""]);
      setLoaded(true);
  };
  

  console.log(currentQuiz);

  console.log(score);
  
  if (loaded === true) {
    return (
      <div>
        <h2>Quiz</h2>
        <br/>
        <div>
        <Game
          quiz={quiz[currentQuiz]}
          index={getIndex}
          next={nextItem}
          back={backItem}
          submit={submitItem}
          reset={resetItem}
          score={score}
          answer={answer_user}
          currentQuiz={currentQuiz}
          remove={removeAnswer}
        />
        </div>
      </div>
    )
  } else {
    return (
      <div>
      <h2>Quiz</h2>
      <br/>
      <div>
      <img src = "https://acegif.com/wp-content/uploads/loading-2.gif" alt = "loading"/>
      </div>
      </div>
    );
  }

}