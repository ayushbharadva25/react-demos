import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import useInput from "../hooks/useInput.js";

export default function Login() {
	const {
		value: emailValue,
		hasError: emailHasError,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
	} = useInput("", (value) => isEmail(value) && isNotEmpty(value));

	const {
		value: passwordValue,
		hasError: passwordHasError,
		handleInputChange: handlePasswordChange,
		handleInputBlur: handlePasswordBlur,
	} = useInput("", (value) => hasMinLength(value, 6));

	// const [enteredValues, setEnteredValues] = useState({
	// 	email: "",
	// 	password: "",
	// });

	// const [isEdited, setIsEdited] = useState({
	// 	email: false,
	// 	password: false,
	// });

	// const handleInputChange = (event) => {
	// 	const { name, value } = event.target;
	// 	setEnteredValues((prev) => ({ ...prev, [name]: value }));
	// 	setIsEdited((prevEdit) => ({ ...prevEdit, [name]: false }));
	// };

	// function handleInputBlur(event) {
	// 	const { name } = event.target;
	// 	setIsEdited((prev) => ({ ...prev, [name]: true }));
	// }

	function handleSubmit(event) {
		event.preventDefault();
		// const form = event.target;
		// const formData = new FormData(form);
		// const data = Object.fromEntries(formData);
		// console.log(data);

		if (emailHasError || passwordHasError) {
			return;
		}

		console.log(emailValue, passwordValue);
	}

	// const emailIsInvalid = isEdited.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email);
	// const passwordIsInvalid = isEdited.password && !hasMinLength(enteredValues.password, 6);

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<Input
					label="Email"
					id="email"
					type="email"
					name="email"
					value={emailValue}
					onChange={handleEmailChange}
					onBlur={handleEmailBlur}
					error={emailHasError && "Please enter valid email.."}
				/>
				<Input
					label="Password"
					id="password"
					type="password"
					name="password"
					value={passwordValue}
					onChange={handlePasswordChange}
					onBlur={handlePasswordBlur}
					error={passwordHasError && "Please enter valid password.."}
				/>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
