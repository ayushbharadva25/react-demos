import React from "react";
import investmentCalculatorLogo from "../assets/investment-calculator-logo.png";

function Header() {
	return (
		<header id="header">
			<img
				src={investmentCalculatorLogo}
				alt="Investment Calculator Logo"
			/>
			<h1>React Investment Calculator</h1>
		</header>
	);
}

export default Header;
