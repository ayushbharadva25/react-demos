import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../context/CartContext";
import { currencyFormatter } from "../utils/formatter";
import Input from "../UI/Input";
import Button from "../UI/Button";
import UserProgressContext from "../context/UserProgressContext";
import useHttp from "../hooks/useHttp";

const requestConfig = {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
};

function Checkout() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);

	const {
		data,
		isLoading: isSending,
		error,
		sendRequest,
		clearData,
	} = useHttp("http://localhost:3000/orders", requestConfig);

	const cartTotal = cartCtx.items.reduce(
		(totalPrice, item) => totalPrice + item.quantity * item.price,
		0
	);

	const handleClose = () => {
		userProgressCtx.hideCheckout();
	};

	const handleFinish = () => {
		userProgressCtx.hideCheckout();
		cartCtx.clearCart();
		clearData();
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const fd = new FormData(event.target);
		const customerData = Object.fromEntries(fd.entries());

		sendRequest(
			JSON.stringify({
				order: {
					items: cartCtx.items,
					customer: customerData,
				},
			})
		);

		// fetch("http://localhost:3000/orders", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({
		// 		order: {
		// 			items: cartCtx.items,
		// 			customer: customerData,
		// 		},
		// 	}),
		// });
	};

	let actions = (
		<>
			<Button type="button" textOnly onClick={handleClose}>
				Close
			</Button>
			<Button>Submit Order</Button>
		</>
	);

	if (isSending) {
		actions = <span>Sending Order data...</span>;
	}

	if (data && !error) {
		return (
			<Modal
				open={userProgressCtx.progress === "checkout"}
				onClose={handleClose}
			>
				<h2>Success!</h2>
				<p>Your order was submitted Successfully.</p>
				<p className="modal-actions">
					<Button onClick={handleFinish}>Okay</Button>
				</p>
			</Modal>
		);
	}

	return (
		<Modal
			open={userProgressCtx.progress === "checkout"}
			onClose={handleClose}
		>
			<form action="" onSubmit={handleSubmit}>
				<h2>Your Checkout</h2>
				<p>Total Amount : {currencyFormatter.format(cartTotal)}</p>

				<Input label="Full name" type="text" id="name" />
				<Input label="E-mail Address" type="email" id="email" />
				<Input label="Street" type="text" id="street" />
				<div className="control-row">
					<Input label="Postal Code" type="text" id="postal-code" />
					<Input label="City" type="text" id="city" />
				</div>

				{error && (
					<Error title="Failed to submit order" message={error} />
				)}

				<div className="modal-actions">{actions}</div>
			</form>
		</Modal>
	);
}

export default Checkout;
