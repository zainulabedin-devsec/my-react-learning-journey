import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const amountInputId = useId();

  return (
    <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md flex gap-4">
      {/* Amount */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-gray-500 text-sm mb-1 block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="w-full bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none py-1"
          placeholder="Enter amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency */}
      <div className="w-1/2 text-right">
        <p className="text-gray-500 text-sm mb-1">Currency</p>
        <select
          className="w-full bg-gray-100 rounded-lg px-2 py-1 outline-none cursor-pointer"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
