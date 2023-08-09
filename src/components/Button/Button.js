import "./button.scss";

export default function Button(props) {
    return(
        <button type={props.type} value={props.title.toLowerCase()} className={props.className}>{props.title}</button>
    )
}