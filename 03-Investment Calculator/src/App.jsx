import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 9,
		duration: 15,
	});

	const handleInputChange = (input, value) => {
		setUserInput((prevUserInput) => ({
			...prevUserInput,
			[input]: +value,
		}));
	};

	const { duration, annualInvestment, initialInvestment } = userInput;

	const isInputsValid =
		duration >= 1 && annualInvestment >= 0 && initialInvestment >= 0;

	return (
		<>
			<Header />
			<UserInput userInput={userInput} handleChange={handleInputChange} />
			{isInputsValid ? (
				<Results inputValues={userInput} />
			) : (
				<p className="center">Please! enter valid inputs</p>
			)}
		</>
	);
}

export default App;
