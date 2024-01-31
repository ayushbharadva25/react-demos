import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }) {
	const timer = useRef();
	const dialog = useRef();
	const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

	const isTimerActive =
		timeRemaining > 0 && timeRemaining < targetTime * 1000;

	if (timeRemaining <= 0) {
		clearInterval(timer.current);
		dialog.current.open();
	}

	const handleReset = () => {
		setTimeRemaining(targetTime * 1000);
	};

	const handleStart = () => {
		timer.current = setInterval(() => {
			setTimeRemaining((prevTime) => prevTime - 100);
		}, 100);
	};

	const handleStop = () => {
		clearInterval(timer.current);
		dialog.current.open();
	};

	return (
		<>
			<ResultModal
				ref={dialog}
				remainingTime={timeRemaining}
				targetTime={targetTime}
				onReset={handleReset}
			/>
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : null}
				</p>
				<div>
					<button onClick={isTimerActive ? handleStop : handleStart}>
						{isTimerActive ? "Stop" : "Start"} challenge
					</button>
				</div>
				<p className={isTimerActive ? "active" : undefined}>
					{isTimerActive ? "Time is running.." : "Timer Inactive"}
				</p>
			</section>
		</>
	);
}

export default TimerChallenge;
