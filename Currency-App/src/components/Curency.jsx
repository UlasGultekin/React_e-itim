import React, { useState } from 'react'
import '../css/Currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios'
let BASE_URL="https://api.freecurrencyapi.com/v1/latest";
let API_KEY="fca_live_5jBnSo8qc7wFxMhkjVwmL1z6ybxs8QrWwGUsaIdp"


function Curency() {
const [amount,setAmount] = useState(0);
const [fromCurrency,setFromCurrency] = useState('USD');
const [toCurrency,setToCurrency] = useState('TRY');
const [result,setResult] = useState(0);

const exChange =async()=>{
 const response= await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
setResult(response.data.data[toCurrency]*amount);
}
  return (
    <div className='currency-div'>
        <div>
            <h2>Döviz Kuru Uygulaması</h2>
        </div>
        <div>
              <input type="number" className='amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <select onChange={(e)=>setFromCurrency(e.target.value)} className='from-currency-option'>
            <option >USD</option>
            <option >EUR</option>
            <option >TRY</option>
        </select>
        <FaRegArrowAltCircleRight style={{fontSize:'30px',marginRight:'10px'}}/>
        <select onChange={(e)=>setToCurrency(e.target.value)} className='to-currency-option'>
        <option >TRY</option>
            <option >USD</option>
            <option >EUR</option>
            
        </select>
        <input value={result} type="number" className='result' />
    </div>
    <div>
        <button onClick={exChange} style={{marginTop:'20px', marginLeft:'-10px', backgroundColor:'cyan', width:'80px', height:'30px', fontSize:'20px', border:'solid black',borderRadius:'10px', cursor:'pointer'}}>Çevir</button>
    </div>
        </div>
      
  )
}

export default Curency