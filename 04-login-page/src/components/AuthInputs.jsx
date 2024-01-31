import { useState } from "react";
import { styled } from "styled-components";
import CustomInput from "./CustomInput";
import Button from "./Button";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1.5rem;
`;

const TextButton = styled.button`
	color: #f0b322;
	border: none;

	&:hover {
		color: #f0920e;
	}
`;

export default function AuthInputs() {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");
	const [submitted, setSubmitted] = useState(false);

	function handleInputChange(identifier, value) {
		if (identifier === "email") {
			setEnteredEmail(value);
		} else {
			setEnteredPassword(value);
		}
	}

	function handleLogin() {
		setSubmitted(true);
	}

	const emailNotValid = submitted && !enteredEmail.includes("@");
	const passwordNotValid = submitted && enteredPassword.trim().length < 6;

	return (
		<div id="auth-inputs">
			<Container>
				<CustomInput
					label={"Email"}
					invalid={emailNotValid}
					type="email"
					onChange={(event) =>
						handleInputChange("email", event.target.value)
					}
				/>
				<CustomInput
					label={"Password"}
					invalid={passwordNotValid}
					type="password"
					onChange={(event) =>
						handleInputChange("password", event.target.value)
					}
				/>
			</Container>
			<div className="actions">
				<TextButton type="button">Create a new account</TextButton>
				<Button onClick={handleLogin}>Sign In</Button>
			</div>
		</div>
	);
}
