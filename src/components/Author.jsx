import styles from "../assets/styles/Author.module.css";

export default function Question(props) {
    return (
        <div className = {styles.author}>
            <img className = {styles.authorimg} src = {props.src} alt = {props.alt}/>
            <p>{props.name}</p>
        </div>
    )
}