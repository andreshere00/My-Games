import Image from "./Image.jsx"
import Question from "./Question.jsx"
import ActionBar from "./ActionBar.jsx"
import Answer from "./Answer.jsx"
import Author from "./Author.jsx"
import Score from "./Score.jsx"
import QuizBar from "./QuizBar.jsx"

export default function Game(props) {
    console.log(props.quiz.attachment === null)

    const getUser = (props) => {
        if (props.quiz.author.username === "admin") {
            return props.quiz.author.username;
        } else {
            if (props.quiz.author === null) {
                return "unkown";
            } else {
                return props.quiz.author.profileName;
            }
        }
    }
    return (
        <div>
            <QuizBar index = {props.index} />
            <br/>
            <Image quizurl = {(props.quiz.attachment === null) ? "https://media.giphy.com/media/LOznMvZUKneOhiIscg/giphy.gif" : props.quiz.attachment.url} quizalt = {(props.quiz.attachment === null) ? "unknown" : props.quiz.attachment.filename} />
            <br/>
            <Question question = {props.quiz.question} />
            <br/>
            <Author name = {getUser(props)}  src = {props.quiz.author.photo.url === null ? "https://pbs.twimg.com/profile_images/958172060206841856/xNhKM5Sn_400x400.png" : props.quiz.author.photo.url} alt = {props.quiz.author.photo.filename === null ? "unkown" : props.quiz.author.photo.filename} />
            <br />
            <Answer answer = {props.answer} remove = {props.remove} />
            <br />
            <Score score = {props.score} />
            <br />
            <ActionBar quiz = {props.quiz} next = {props.next} back = {props.back}  submit = {props.submit} reset = {props.reset} />
        </div>
    )
}