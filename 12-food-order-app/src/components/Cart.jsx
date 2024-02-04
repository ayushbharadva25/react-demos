import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { currencyFormatter } from "../utils/formatter";
import { useContext } from "react";
import UserProgressContext from "../context/UserProgressContext";
import CartContext from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);

	const cartTotal = cartCtx.items.reduce(
		(totalPrice, item) => totalPrice + item.quantity * item.price,
		0
	);

	const handleCloseCart = () => {
		userProgressCtx.hideCart();
	};

	const handleGoToCheckout = () => {
		userProgressCtx.showCheckout();
	};

	return (
		<Modal
			className="cart"
			open={userProgressCtx.progress === "cart"}
			onClose={
				userProgressCtx.progress === "cart" ? handleCloseCart : null
			}
		>
			<h2>Your Cart</h2>
			<ul>
				{cartCtx.items.map((item) => (
					<CartItem
						key={item.id}
						onIncrease={() => cartCtx.addItem(item)}
						onDecrease={() => cartCtx.removeItem(item)}
						{...item}
					/>
				))}
			</ul>
			<p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
			<p className="modal-actions">
				<Button textOnly onClick={handleCloseCart}>
					Close
				</Button>
				{cartCtx.items.length && (
					<Button onClick={handleGoToCheckout}>Go to Checkout</Button>
				)}
			</p>
		</Modal>
	);
}

export default Cart;
