import React from "react";

const CurrencyDropDown = ({ currencies, title , currency, setcurrency}) => {
  console.log("currencies:", currencies)
  return (
    <>
      <div>
        <label>{title}</label>
        <select value={currency} onChange={(e)=>setcurrency(e.target.value)}>
          {currencies.map((currentCurrency) => {

            return (
              <option key={currentCurrency} value={currentCurrency}>
                {currentCurrency}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default CurrencyDropDown;
