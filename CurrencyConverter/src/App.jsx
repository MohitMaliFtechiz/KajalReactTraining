import { useEffect, useState } from "react";
import CurrencyDropDown from "./CurrencyDropDown";

function App() {
  const [currencies, setcurrencies] = useState([]);
  const [amount, setAmount] = useState("");
  const [fromCurrencies, setFromCurrencies] = useState("USD");
  const [toCurrencies, setToCurrencies] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [converting, setConverting] = useState(null);
  // https://api.frankfurter.app/currencies
  // https://api.frankfurter.app/currencies?amount=1&fromUSD&toINR
  console.log("currencies12", fromCurrencies);
  console.log("currencies12", toCurrencies);
  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      const currencyList = Object.keys(data);
      console.log("Currency list:", currencyList);
      setcurrencies(currencyList);
    } catch (error) {
      console.log("error fetching", error);
    }
  };

  const convertCurrency = async() => {
    if (!amount) return
    setConverting(true)
    try {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrencies}&to=${toCurrencies}`);
      const data = await res.json();
  
      setConvertedAmount(data.rates[toCurrencies] + "" + toCurrencies);
    } catch (error) {
      console.log("error fetching", error);
    }finally{
      setConverting(false)
    }
  }
  useEffect(() => {
    fetchCurrencies();
  }, []);
  //  console.log("currencies", currencies)
  return (
    <>
      <div>
        <h2>Currency convertor</h2>
        <div>
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter Here"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        {/* //from */}
        <div>
          <CurrencyDropDown
            currencies={currencies}
            title="from"
            currency={fromCurrencies}
            setcurrency={setFromCurrencies}
            convertedAmount={convertedAmount}
          />
        </div>

        {/* //to */}
        <div>
          <CurrencyDropDown
            currencies={currencies}
            title="to"
            currency={toCurrencies}
            setcurrency={setToCurrencies}
            convertedAmount={convertedAmount}
          />
        </div>

        <p>currency converted : {convertedAmount} </p>

        <button onClick={convertCurrency}>convertor</button>
      </div>
    </>
  );
}

export default App;
