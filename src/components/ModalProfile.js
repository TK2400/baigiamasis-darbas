import { useState } from 'react'
import './modal.css'



export default function Modal(props) {
    // let { index, list, setList, userId, email, nameShort, name, lname, age, setName } = props
    const [name, setName] = useState(props.name)
    const [lname, setLname] = useState(props.lname)
    const [email, setEmail] = useState(props.email)
    const [age, setAge] = useState()

 


    return (
        <div className="modal">
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
            <button onClick={props.click}> Atmesti</button>
            <button onClick={props.click}> Atnaujinti duomenis </button>

        </div>)
}

