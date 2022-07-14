import { useState } from "react"
import Modal from "./Modal"
import './li.css'
import More from "./more.svg"
import Edit from "./edit.svg"
import Delete from "./delete.svg"



export default function Li(props) {
    const { index, list, updateList, userId, email, nameShort, name, lname, age } = props
    const [buttonClicked, setButtonClicked] = useState(false)
    const [editButtonClicked, setEditButtonClicked] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    const showMore = () => !buttonClicked ? setButtonClicked(true) : setButtonClicked(false)
    const modalOn = () => !editButtonClicked ? setEditButtonClicked(true) : setEditButtonClicked(false)

    function handleDelete(id) {

        setIsPending(true)

        fetch(`http://127.0.0.1:9000/users/${id}`, {
            method: 'DELETE'
        }).then((res) => {
            setButtonClicked(true)
            console.log(res)
            if (!res.ok) {
                throw Error("nėra atsakymo iš serverio :(")
            } else {
                setButtonClicked(false)
                updateList(id)

                setIsPending(false)
            }
        })
            .catch((err) => {
                setError(err.message)
            });
    }

    const more = <img src={More} className='icon' alt='more' />
    const less = <img src={More} className='icon' alt='more' />
    const editData = <img src={Edit} className='icon' alt='edit' />
    const delData = <img src={Delete} className='icon' alt='delete' />


    return (
        <div className="liHolder">


            {error && <div> {error} </div>}

            <li key={index}>

                {!buttonClicked ? <div className="showMore"> <p>{nameShort}. {lname}</p></div> :
                    <div className="showMore"> <p>{name} {lname}, {email}, amzius {age}m.</p> </div>}

                <div className="buttonHolder">

                    {!isPending ? <button onClick={showMore}>
                        {buttonClicked ? more : less}
                    </button> : isPending && ""}

                    {!editButtonClicked && <button onClick={modalOn}> {editData} </button>}

                    {!isPending ? <button onClick={() => handleDelete(userId)}>{delData}</button> :
                        <button disabled> Dalyvis trinamas... </button>}

                </div>
            </li>
            {editButtonClicked && <Modal
                click={() => setEditButtonClicked(false)}
                list={list}
                key={index + name}
                userId={userId}
                index={index}
                name={name}
                lname={lname}
                email={email}
                age={age}
            />
            }
        </div>

    )
}


