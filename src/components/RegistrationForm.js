import { useState } from 'react';
import './registrationForm.css'




export default function PostRegistrationForm() {
    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [isPending, setIsPending] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = { name, lname, email, age }
        setIsPending(true)
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
            setIsPending(false)
        })
    }

    return (
        <div className='formHolder'>
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
                {!isPending && <input type ="submit" value= "Užregistruoti asmenį į egzaminą"/>}
                {isPending && <input type ="submit" disabled value="Kraunama..."/>}

            </form>
        </div >

    )
}
