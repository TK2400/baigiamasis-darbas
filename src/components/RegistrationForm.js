import { useState } from 'react';




export default function PostRegistrationForm() {
    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
  

    // const [isEdit, setIsEdit] = useState(false)

    // function handle(e) {
    //     console.log(e)
    //     const newData = { ...data }
    //     newData[e.target.id] = e.target.value
    //     setData(newData)
    //     console.log(newData)
    // }

    // function submit(e) {
    //     e.preventDefault()
    // }


    return (
        <div className='form'>
            <form>
                <input
                    placeholder="Vardas"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder="Pavarde"
                    type="text"
                    required
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                />

                <input
                    placeholder="el.pastas"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    placeholder="amzius m."
                    type="number"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <button> Itraukti dalyvi i sarasa</button>
                <p> {name}</p>
                <p> {lname}</p>
                <p> {email}</p>
                <p> {age}</p>

            </form>
        </div >

    )
}
