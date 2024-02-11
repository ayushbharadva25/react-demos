function Error({ title, message }) {
	return (
		<p className="error">
			<h2>{title}</h2>
			<p>{message}</p>
		</p>
	);
}

export default Error;
