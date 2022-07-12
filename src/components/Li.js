import { useState } from "react"
import ModalProfile from "./ModalProfile"

export default function Li(props) {
    const { index, list, setList, userId, email, nameShort, name, lname, age, setName } = props
    const [buttonClicked, setButtonClicked] = useState(false)
    const [editButtonClicked, setEditButtonClicked] = useState(false)
    const [isPending, setIsPending] = useState(false)
  
    const showMore=()=>!buttonClicked? setButtonClicked(true): setButtonClicked(false)
    const modalOn=()=> !editButtonClicked?setEditButtonClicked(true): setEditButtonClicked(false)

    function handleDelete(id) {
        setIsPending(true)

        fetch(`http://127.0.0.1:9000/users/${id}`, {
            method: 'DELETE'
        }).then((res) => {
            setButtonClicked(true)
            console.log(res)
            if (!res.ok) {
                throw Error("could not fetch!")
            } else {
                setButtonClicked(false)
                const newList = list
                newList.splice(index, 1)
                setList([...newList])
                setIsPending(false)
            }
        })
            .catch((error) => {
                alert(error)
            });
    }

    return (
        <li key={index}>
            {!buttonClicked?<div className="showMore"> {nameShort}. {lname}</div>:
            <div className="showMore">  {name} {lname}, {email}, amzius {age}m.</div>}

            <div className="buttonHolder">
                {!isPending? <button onClick={showMore}> {buttonClicked ? "Mažiau" : "Daugiau"}</button>:
                isPending && ""}

                {!editButtonClicked && <button style={{ marginTop: "10px" }} onClick={modalOn}> Redaguoti dalyvio duomenis </button>}

                {!isPending ? <button style={{ marginTop: "10px" }} onClick={() => handleDelete(userId)}>Istrinti dalyvi</button>:
                <button style={{ marginTop: "10px" }} disabled> Dalyvis trinamas... </button>}

                {editButtonClicked && <ModalProfile
                    click={() => setEditButtonClicked(false)}
                    list={list}
                    key={index + name}
                    userId={userId}
                    index={index}
                    name={name}
                    setName={setName}
                    lname={lname}
                    email={email}
                    age={age}
                    setList={setList} />
                }</div>
        </li>
    )
}


