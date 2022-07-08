
// import { useEffect, useState } from "react";
import "./App.css"
import UserHeader from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
// import User from "./components/user";



export default function App() {
    // const [users, setUsers] = useState(() => {
    //     return []
    // })
    // const [filter, setFilter] = useState('')

    // useEffect(() => {
    //     fetch("https://randomuser.me/api/?results=3")
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
        </div>
    );
}

