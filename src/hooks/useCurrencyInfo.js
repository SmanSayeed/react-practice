// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json

import { useEffect, useState } from "react";

function useCurrecyInfo(currency){
    const [data,setData]= useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log('data = ',data)
    },[currency] );

    return data;

}

export default useCurrecyInfo;