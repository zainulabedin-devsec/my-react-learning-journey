import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/33440471/pexels-photo-33440471.jpeg)",
      }}
    >
      <div className="w-full max-w-md bg-white/30 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-semibold text-center mb-6 text-white">
          Currency Converter 💱
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-5"
        >
          {/* FROM */}
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            selectCurrency={from}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(value) => setAmount(value)}
          />

          {/* SWAP */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full transition"
            >
              ⇅ Swap
            </button>
          </div>

          {/* TO */}
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            selectCurrency={to}
            onCurrencyChange={(currency) => setTo(currency)}
            amountDisabled
          />

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
