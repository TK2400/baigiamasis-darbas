import { useState } from 'react'
import './modal.css'
import Edit from "./edit.svg"
import Delete from "./delete.svg"



export default function Modal(props) {
    // const [list, setList] = useState(props.list)
    const [name, setName] = useState(props.name)
    const [lname, setLname] = useState(props.lname)
    const [email, setEmail] = useState(props.email)
    const [age, setAge] = useState(props.age)
    const [isEditing, setIsEditing] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false)
    // const [error, setError] = useState(null)


    const userId = props.userId
    const click = props.click
    // const list = props.list
    const updateList = props.updateList
    const index = props.index

    const editData = <img src={Edit} className='icon' alt='edit' />
    const delData = <img src={Delete} className='icon' alt='delete' />

    function handleEdit(id) {
        console.log(id)
        const form = { name, lname, email, age }
        // form._id = id

        setIsEditing(true)
        setIsUpdated(false)

        // console.log(index)
        // console.log(form)

        fetch(`http://127.0.0.1:9000/user/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(form)
        }).then((res) => {
            if (!res.ok) {
                throw Error("nėra atsakymo iš serverio :(")
            } else {
                setIsEditing(false)
                updateList(index, form, id)
                setIsUpdated(true)
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }

    return (

        <div className="modal" id="modal">
            {!isUpdated ?
                <div className='modalForm'>
                    <div className='input'> V. <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    /></div>

                    <div className='input'> P. <input
                        type="text"
                        required
                        value={lname}
                        onChange={(e) => {
                            setLname(e.target.value)
                        }}
                    /></div>

                    <div className='input'> @ <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    /></div>

                    <div className='input'> M. <input
                        type="number"
                        required
                        value={age}
                        onChange={(e) => {
                            setAge(e.target.value)
                        }}
                    /></div>

                    {!isEditing ? <button onClick={() => handleEdit(userId)}> {editData}</button> :
                        <button type="submit" disabled> Duomenys išsaugomi...</button>}
                </div> :
                <div>
                    <span> Dalyvio {name} {lname} duomenys sėkmingai atnaujinti </span>
                    <button onClick={click}> Uždaryti </button>
                </div>}
            {/* {isUpdated && <button> Išsaugota! Uždaryti</button>} */}
            {!isUpdated && <div className='cancelBtn'>
                <button onClick={props.click}>{delData}</button> </div>}
        </div >

    )
}

