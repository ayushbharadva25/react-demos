import React, { useState } from "react";
import QUESTIONS from "../questions.js";
import { useCallback } from "react";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;
	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback((selectedAnswer) => {
		setUserAnswers((prevUserAnswers) => [
			...prevUserAnswers,
			selectedAnswer,
		]);
	}, []);

	const handleSkipAnswer = useCallback(
		() => handleSelectAnswer(null),
		[handleSelectAnswer]
	);

	if (quizIsComplete) {
		return <Summary userAnswers={userAnswers} />;
	}

	return (
		<div id="quiz">
			<Question
				key={activeQuestionIndex}
				index={activeQuestionIndex}
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipAnswer}
			/>
		</div>
	);
}

export default Quiz;
