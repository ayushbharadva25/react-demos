import React from 'react'
import quizlogo from '../assets/quiz-logo.png'

function Header() {
    return (
        <header>
            <img src={quizlogo} alt="logo" />
            <h1>ReactQuiz</h1>
        </header>
    )
}

export default Header