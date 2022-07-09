import { useState } from "react"


export default function Li(props) {
    const [buttonClicked, setButtonClicked] = useState(false)

    function showMore() {
        if (!buttonClicked) {
            setButtonClicked(true)
        }
        else { setButtonClicked(false) }
    }

    return (
    <li key={props.index}> {props.name} {props.lname}
<button onClick={showMore}>
    {buttonClicked ? "show less" : "show more"}
</button>

{buttonClicked && <div> {props.email}, {props.age}</div>}

</li>
        )
}


