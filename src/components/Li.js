import { useState } from "react"


export default function Li(props) {
    const [buttonClicked, setButtonClicked] = useState(false)

    function showMore() {
        if (!buttonClicked) {
            setButtonClicked(true)
        }
        else { setButtonClicked(false) }
    }

    function handleDelete(id) {
        fetch(`http://127.0.0.1:9000/users/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json()
                .then((resp) => {
                    console.warn(result)
                })
        })
    }


    return (
        <li key={`${props.index}`}>
            {!buttonClicked && <div className="showMore"> {`${props.nameShort}. ${props.lname}`}</div>}
            {buttonClicked && <div className="showMore">  {`${props.name} ${props.lname}, ${props.email}, amzius ${props.age}m.`}</div>}
            <div className="buttonHolder">
                <button onClick={showMore}>
                    {buttonClicked ? "Mažiau" : "Daugiau"}
                </button>
                <button onClick={()=>handleDelete(props.object)}> Trinti </button>
            </div>



        </li>
    )
}


