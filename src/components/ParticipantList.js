import { useEffect, useState } from "react";


export default function ParticipantList(props) {
    const [list, setList] = useState(null)

    // const [list, setList] = useState(() => {
    //     return []
    // })

    // const [buttonClicked, setButtonClicked] = useState(props.state)

    // function showMore() {
    //     if (!buttonClicked) {
    //         setButtonClicked(true)
    //     }
    //     else { setButtonClicked(false) }
    // }



    useEffect(() => {
        fetch("http://127.0.0.1:9000/users")
            .then((resp) => resp.json())
            .then((data) => {
                setList(data)
            })
    }, [])



    return (
        <section>
            <div>
                {list && list.map((user) => (
                    <div key={user.name + user.number}> {user.name} {user.lname} {user.number}</div>))}
            </div>
            {/* <button onClick={() => showMore()}>
                {buttonClicked ? "show less" : "show more"}
            </button>
            {buttonClicked &&
                users.map((user) => (
                    <div key={user.location.city}> {user.location.city}, {user.location.country}</div>))
            } */}


        </section>
    )
}

