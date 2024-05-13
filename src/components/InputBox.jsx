// eslint-disable-next-line no-unused-vars
import React from "react";

export const InputBox = ({
	label,
	amount,
	amountDisable = "false",
	currencyDisable = "false",
	onAmountChange,
	onCurrencyChange,
	selectCurrency = "USD",
	currencyOptions = [],
	className = "",
}) => {
	return (
		<div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
			<div className="w-1/2">
				<label className="text-black/40 mb-2 inline-block">
					{label}
				</label>
				<input
					className="outline-none w-full bg-transparent py-1.5"
					type="number"
					placeholder="Amount"
					disabled={amountDisable}
					value={amount}
					onChange={(e) =>
						onAmountChange && onAmountChange(Number(e.target.value))
					}
				/>
			</div>
			<div className="w-1/2 flex flex-wrap justify-end text-right">
				<p className="text-black/40 mb-2 w-full">Currency type</p>
				<select
					className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
					value={selectCurrency}
					disabled={currencyDisable}
					onChange={(e) =>
						onCurrencyChange && onCurrencyChange(e.target.value)
					}
				>
					{currencyOptions.map((currency) => (
						<options key={currency} value={currency}>
							{currency}
						</options>
					))}
				</select>
			</div>
		</div>
	);
};
