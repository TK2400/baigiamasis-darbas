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

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = { name, lname, email, age }
        console.log(form)
        setName('')
        setLname('')
        setEmail('')
        setAge('')

        fetch('http://127.0.0.1:9000/users', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(form)
        }).then(() => {
            console.log("krauna")
        })
    }




    return (
        <div className='form' >
            <form onSubmit={handleSubmit}>
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

            </form>
        </div >

    )
}
