import React, { useEffect, useState } from "react";

function ProgressBar({ timer }) {
	const [remainingTime, setRemainingTime] = useState(timer);

	useEffect(() => {
		const initerval = setInterval(() => {
			setRemainingTime((prevTime) => prevTime - 10);
		}, 10);

		return () => {
			clearInterval(initerval);
		};
	}, []);

	return <progress value={remainingTime} max={timer} />;
}

export default ProgressBar;
