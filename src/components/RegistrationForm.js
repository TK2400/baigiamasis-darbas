import { useEffect, useState } from 'react';
import './registrationForm.css'
// import PartcipantList from './ParticipantList'
import Li from './Li'





export default function PostRegistrationForm() {
    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [isPending, setIsPending] = useState(false)
    const [list, setList] = useState([])
    // const [buttonClicked, setButtonClicked] = useState(false)

    function handleSubmit(e) {
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
            list.push(form)
            console.log(form)
            setIsPending(false)
        })
    }

    useEffect(() => {
        fetch("http://127.0.0.1:9000/users")
            .then((resp) => resp.json())
            .then((data) => {
                setList(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    // function showMore() {
    //     if (!buttonClicked) {
    //         setButtonClicked(true)
    //     }
    //     else { setButtonClicked(false) }
    // }


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
                    type="text"
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
                {!isPending && <input type="submit" value="Užregistruoti asmenį į egzaminą" />}
                {isPending && <input type="submit" disabled value="Kraunama..." />}

            </form>
            <div className='userHolder'>
                <ol>
                    {list.map((user, index) => (
                        <Li
                            index={index}
                            name={user.name}
                            lname={user.lname}
                            email={user.email}
                            age={user.age} />

                    ))}
                </ol>
            </div>
        </div >

    )
}

