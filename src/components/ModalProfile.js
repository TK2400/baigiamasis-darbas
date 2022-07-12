import { useState } from 'react'
import './modal.css'



export default function Modal(props) {
    const [name, setName] = useState(props.name)
    const [lname, setLname] = useState(props.lname)
    const [email, setEmail] = useState(props.email)
    const [age, setAge] = useState(props.age)
    const [isEditing, setIsEditing] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false)
    // const [timeout, setTimeout] = useState(0)




    // function cancel() {
    //     setIsEditing(false)
    //     return
    // }


    const userId = props.userId

    const click = props.click
    console.log(click)


    function handleEdit(id) {
        const form = { name, lname, email, age }
        setIsEditing(true)
        setIsUpdated(false)

        fetch(`http://127.0.0.1:9000/user/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(form)
        }).then(() => {
            setIsEditing(false)
            setIsUpdated(true)


        }).catch((error) => {
            console.log(error.message)
        })

    }


    return (
        <div className="modal">
            {!isUpdated ?
                <div>
                    <div> V.</div>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <div> P.</div>
                    <input
                        type="text"
                        required
                        value={lname}
                        onChange={(e) => {
                            setLname(e.target.value)
                        }}
                    />
                    <div> @</div>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <div> M.</div>
                    <input
                        type="number"
                        required
                        value={age}
                        onChange={(e) => {
                            setAge(e.target.value)
                        }}
                    />

                    {!isEditing ? <button onClick={() => handleEdit(userId)}> Atnaujinti dalyvio duomenis</button> :
                        <button type="submit" disabled> Duomenys išsaugomi...</button>}
                </div> :
                <div>
                    <p> Pavyko !</p>
                    <button onClick={click}> X </button>
                </div>}
            {/* {isUpdated && <button> Išsaugota! Uždaryti</button>} */}
            {!isUpdated ? <button onClick={props.click}> Atmesti</button> : ''}
        </div >
    )
}

