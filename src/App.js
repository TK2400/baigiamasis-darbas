
// import { useEffect, useState } from "react";
import "./App.css"
import UserHeader from "./components/Header";
// import ParticipantList from "./components/ParticipantList";
import RegistrationForm from "./components/RegistrationForm";






export default function App() {
    // const [users, setUsers] = useState(() => {
    //     return []
    // })

    // const [filter, setFilter] = useState('')

    // useEffect(() => {
    //     fetch("http://127.0.0.1:9000/users")
    //         .then((resp) => resp.json())
    //         .then((result) => setUsers(result.results))
    // }, [])

    // function filterState(event) {
    //     setFilter(event.target.value)
    // }

    return (
        <div className="container">
        
            <UserHeader />
            <RegistrationForm />
            {/* <ParticipantList /> */}
          
            {/* <section>
                {users.map((user) => (
                    <Participant
                    key={user.name}
                    state={false}
                    name={` ${user.name}`}
                    lname = {`${user.lname}`}
                    email = {`${user.email}`}
                    age = {`${user.age}`}
                    number = {`${user.number}`}
                />
                ))}
                  </section>  */}
        </div>
    );
}

