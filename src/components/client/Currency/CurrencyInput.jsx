import { useId } from "react"

export default function CurrencyInput({
    label,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="Eur",
    amount,
    onAmountChange,
    amountDisabled,
    currencyDisabled,
    className=""
}) {
    const amountInputId = useId();
    console.log("label ",label," amount=",amount)
  
  return (
    <>
<div className="currency-input-box">
<div className="amount">
        <label htmlFor={amountInputId}>{label}</label>
        <div>
            <input 
            id={amountInputId}
            placeholder="Amount"  
            type="number" 
            // defaultValue={amount} 
            value={amount === 0 ? '' : amount}
            // disabled={amountDisabled}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
        </div>
    </div>
    <div className="currency-name">
    <div>Currency Type</div>
        <div>
            <select  value={selectCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
            // disabled={currencyDisabled}
            >
                {
                    currencyOptions.map((currency,index)=>(
                        <option key={index} value={currency}>{currency}</option>
                    ))
                }            
            </select>
        </div>
    </div>
</div>
    </>
  )
}
