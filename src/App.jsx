import { useEffect } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./index.css";

function App() {
	const currencyInfo = useCurrencyInfo("INR", "USD");
	useEffect(() => {
		console.log("hii");
		console.log(currencyInfo);
	}, [currencyInfo]);

	return <h1 className="bg-orange-400">hii</h1>;
}

export default App;
