import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

function Results({ inputValues }) {
	const results = calculateInvestmentResults(inputValues);
	const initialInvestment =
		results[0].valueEndOfYear -
		results[0].interest -
		results[0].annualInvestment;

	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Initial Investment</th>
					<th>Annual Investment</th>
					<th>Interest Earned</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				{results.map((yearData, index) => {
					const totalInterest =
						yearData.valueEndOfYear -
						yearData.annualInvestment * yearData.year -
						initialInvestment;
					const totalAmountInvested =
						yearData.valueEndOfYear - totalInterest;

					return (
						<tr key={index}>
							<td>{yearData.year}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default Results;
