// import { useState } from "react";
import './header.css'

export default function UserHeader() {

    return (
        <header className='header'>
            <div>
                <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg" className='header__logo' alt='logo' />
                <div className='title'>
                    <p> VIGI13 registracija į egzaminą </p>
                </div>
            </div>
        </header>
    )
}