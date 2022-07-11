import { useState } from "react"


export default function Li(props) {
    const { index, list, setList, userId, email, nameShort, name, lname, age } = props
    const [buttonClicked, setButtonClicked] = useState(false)

    function showMore() {
        if (!buttonClicked) {
            setButtonClicked(true)
        }
        else { setButtonClicked(false) }
    }

    function handleDelete(id) {
        console.log(index)


        fetch(`http://127.0.0.1:9000/users/${id}`, {
            method: 'DELETE'
        }).then((res) => {
            console.log(res)
            if (!res.ok) {
                throw Error("could not fetch!")
            } else {
                const newList = list
                newList.splice(index, 1)
                setList([...newList])
            }
        })
            .catch((error) => {
                alert(error)
            });

    }

    // function handleDelete(id) {
    //     fetch(`http://127.0.0.1:9000/users/${id}`, {
    //         method: 'DELETE'
    //     }).then((result) => {
    //         result.json()
    //             .then((resp) => {
    //                 console.warn(resp)
    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //             })

    //     })

    // }

    // async function onDelete() {

    //     alert("veikia")
    // await fetch(`http://127.0.0.1:9000/users/:${id}`, {
    //     method: "DELETE",
    // })
    //     .then((res) => {
    //         if (res.status !== 200) {
    //             return alert('klaida');
    //         } else {
    //             const newList = list
    //             newList.splice(index, 1)
    //             setList([...newList])


    //         }
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // };


    return (
        <li key={index}>
            {!buttonClicked && <div className="showMore"> {nameShort}. {lname}</div>}
            {buttonClicked && <div className="showMore">  {name} {lname}, {email}, amzius {age}m.</div>}
            <div className="buttonHolder">
                <button onClick={showMore}>
                    {buttonClicked ? "Mažiau" : "Daugiau"}
                </button>

                <button style={{ marginTop: "10px" }} onClick={() => handleDelete(userId, index)}>delete</button>
            </div>



        </li>
    )
}


