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


    // const onDelete = async (id) => {
    //     await fetch(`http://127.0.0.1:9000/users/${id}`, {
    //       method: "DELETE",
    //     })
    //       .then((res) => {
    //         if (res.status !== 200) {
    //           return;
    //         } else {
    //           setList(
    //             list.filter((user) => {
    //               return user.id !== id;
    //             })
    //           );
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };



    // function removeLi(index) {
    //     const newList = list
    // const id = (newList[index]._id)
    //     setIsPending(true)
    //     fetch(`http://127.0.0.1:9000/users/${id}`, {
    //         method: 'DELETE'
    //     }).then(() => {
    // newList.splice(index, 1)
    // setList([...newList])
    //         setIsPending(false)
    //     }).catch((error) => {
    //         console.log(error.message)
    //     })






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
                    type="text"
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
                            list={list}
                            key={index + name}
                            userId={user._id}
                            index={index}
                            nameShort={user.name[0]}
                            name={user.name}
                            lname={user.lname}
                            email={user.email}
                            age={user.age}
                            setList={setList}
                            // ondelete={onDelete}
                        />




                    ))}
                </ol>
            </div>
        </div >

    )
}

