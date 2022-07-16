import { useEffect, useState } from 'react';
import './registrationForm.css'
// import PartcipantList from './ParticipantList'
import Li from './Li'
import Delete from "./delete.svg"



export default function PostRegistrationForm() {
    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [isPending, setIsPending] = useState(false)
    const [list, setList] = useState([])
    const [repeatedEmail, setRepeatedEmail] = useState(false)



    const delData = <img src={Delete} className='icon' alt='delete' />


    function deleteFromList(gotIdNumber) {
        const deletedList = list.filter((el) => (el._id !== gotIdNumber))
        setList(deletedList)
    }

    function updateList(index, form) {
        list[index].name = form.name
        list[index].lname = form.lname
        list[index].email = form.email
        list[index].age = form.age
        setList([...list])
    }
    function checkEmailBeforeInsert() {
        const result = (element) => (element.email === email)
        if (list.some(result)) {
            setRepeatedEmail(true)
            return true
        }
    }


    function handleSubmit(e) {
        e.preventDefault()

        if (checkEmailBeforeInsert()) {
            return
        }

        // console.log(repeatedEmail)  
        // if(repeatedEmail){
        //     console.log("veikia")    
        // } 

        const form = { name, lname, email, age }
        setName('')
        setLname('')
        setEmail('')
        setAge('')
        setIsPending(true)

        fetch('http://127.0.0.1:9000/users', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(form)
        }).then(() => {
            list.push(form)
            setIsPending(false)
        }).catch((error) => {
            console.log(error.message)
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
                    placeholder="Pavardė"
                    type="text"
                    required
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                />
                <input
                    placeholder="el.paštas"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="amžius m."
                    type="number"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                {!isPending && <input type="submit" value="Užregistruoti asmenį į egzaminą" />}
                {isPending && <input type="submit" disabled value="Kraunama..." />}

                {repeatedEmail &&
                    <div className='error'>
                        <p> Dalyvis su tokiu e.pašto adresu jau yra!</p>
                        <button onClick={() => setRepeatedEmail(false)}> {delData}</button>
                    </div>}

            </form>
            <div className='userHolder'>
                <ol>
                    {list.map((user, index) => (
                        <Li
                            list={list}
                            key={index + name}
                            userId={user._id}
                            index={index}
                            nameShort={user.name[0]}
                            name={user.name}
                            lname={user.lname}
                            email={user.email}
                            age={user.age}
                            deleteFromList={deleteFromList}
                            updateList={updateList}
                        />
                    ))}
                </ol>
            </div>
        </div >
    )
}

