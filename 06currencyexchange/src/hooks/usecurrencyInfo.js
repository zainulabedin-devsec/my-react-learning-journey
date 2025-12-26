import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)
      .then((res) => res.json())
      .then((res) => {
        if (res?.rates) {
          setData(res.rates);
        }
      })
      .catch((error) => {
        console.error("Currency API Error:", error);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
