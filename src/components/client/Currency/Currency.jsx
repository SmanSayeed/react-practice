import { useState } from "react";
import CurrencyInput from "./CurrencyInput";
import './currencyStyle.css'
import useCurrecyInfo from "../../../hooks/useCurrencyInfo"; 

export default function Currency() {

    const [amount,setAmount] = useState(0);
    const [from,setFrom] = useState("usd");
    const [to,setTo] = useState("bdt");
    const [convertedAmount,setConvertedAmount] = useState(0);
    const currencyInfo = useCurrecyInfo(from);
    const options = Object.keys(currencyInfo);
    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        console.log(amount,currencyInfo[to])
        setConvertedAmount(amount * currencyInfo[to])
    }
   

  return (
    <>
    Currency Converter
    <div>
        <CurrencyInput
        label="From"
        amount={amount}
        currencyOptions={options}
        onAmountChange={(currency)=>{
            setAmount(currency)
        }}
        onCurrencyChange={(c)=>setFrom(c)}
        selectCurrency={from}
        amountDisabled={false}
        currencyDisabled={false}
        />
        <button onClick={swap}>Swap</button>
        <CurrencyInput
        label="To"
        amount={convertedAmount}
        currencyOptions={options}
        onCurrencyChange={(c)=>setTo(c)}
        selectCurrency={to}   
        currencyDisabled={false}
        amountDisabled={true}
        />
        <button onClick={convert}>Convert</button>
    </div>

    </>
  )
}
