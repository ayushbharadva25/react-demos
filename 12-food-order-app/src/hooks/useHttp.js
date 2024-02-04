import { useCallback, useEffect, useState } from "react";

async function sendHttpRequests(url, config) {
	const response = await fetch(url, config);
	const resData = await response.json();

	if (!response.ok) {
		throw new Error(
			resData.message || "Something went wrong, failed to send request."
		);
	}
	return resData;
}

export default function useHttp(url, config, initialData) {
	const [data, setData] = useState(initialData);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	function clearData() {
		setData(initialData);
	}

	const sendRequest = useCallback(
		async function sendRequest(data) {
			setIsLoading(true);
			try {
				const resData = await sendHttpRequests(url, {
					...config,
					body: data,
				});
				setData(resData);
			} catch (error) {
				setError(error.message || "Failed to send request.");
			}
			setIsLoading(false);
		},
		[url, config]
	);

	useEffect(() => {
		if (
			(config && (config.method === "GET" || !config.method)) ||
			!config
		) {
			sendRequest();
		}
	}, [sendRequest]);

	return {
		data,
		isLoading,
		error,
		sendRequest,
		clearData,
	};
}
