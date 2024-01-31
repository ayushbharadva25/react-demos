import React from "react";
import quizCompleted from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

function Summary({ userAnswers }) {
	const skippedAnswers = userAnswers.filter((answer) => answer === null);
	const correctAnswers = userAnswers.filter(
		(answer, index) => answer === QUESTIONS[index].answers[0]
	);

	const skippedAnswersPercentage = Math.round(
		(skippedAnswers.length / userAnswers.length) * 100
	);
	const correctAnswersPercentage = Math.round(
		(correctAnswers.length / userAnswers.length) * 100
	);
	const wrongAnswersPercentage =
		100 - skippedAnswersPercentage - correctAnswersPercentage;

	return (
		<div id="summary">
			<img src={quizCompleted} alt="Trophy icon" />
			<h2>Quiz Completed</h2>
			<div id="summary-stats">
				<p>
					<span className="number">{skippedAnswersPercentage}%</span>
					<span className="text">skipped</span>
				</p>
				<p>
					<span className="number">{correctAnswersPercentage}%</span>
					<span className="text">answered correctly</span>
				</p>
				<p>
					<span className="number">{correctAnswersPercentage}%</span>
					<span className="text">answered incorrectly</span>
				</p>
			</div>
			<ol>
				{userAnswers.map((answer, index) => {
					return (
						<li key={answer}>
							<h3>{index + 1}</h3>
							<p className="question">{QUESTIONS[index].text}</p>
							<p className="user-answer">{answer ?? "skipped"}</p>
						</li>
					);
				})}
			</ol>
		</div>
	);
}

export default Summary;
