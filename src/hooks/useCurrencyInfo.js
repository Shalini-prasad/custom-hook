import { useEffect, useState } from "react";

function useCurrencyInfo(currency, baseCurrency) {
	const [fetchInfo, setFetchInfo] = useState({});
	const baseUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_F10zGKuA0MMqUaqy2vqXDPjt5RoGyheh6iHTNhyf`;

	useEffect(() => {
		const url = `${baseUrl}&currencies=${currency}&base_currency=${baseCurrency}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => setFetchInfo(res));
	}, [currency, baseCurrency]);
	// console.log(fetchInfo);
	return fetchInfo;
}

export default useCurrencyInfo;

// https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_F10zGKuA0MMqUaqy2vqXDPjt5RoGyheh6iHTNhyf&currencies=EUR%2CUSD%2CCAD&base_currency=INR
