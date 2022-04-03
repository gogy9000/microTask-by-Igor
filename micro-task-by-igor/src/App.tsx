import React, {useState} from 'react';
import './App.css';
import {CurrencyFilter} from "./CurrencyFilter";

export  type CurrencyType = {
  banknote: string
  nominal: number
  number: number
}


function App() {
  const [state, setState] = useState<Array<CurrencyType>>([
    {banknote: 'dollar', nominal: 50, number: 1234567},
    {banknote: 'rubles', nominal: 50, number: 12341567},
    {banknote: 'dollar', nominal: 50, number: 12342567},
    {banknote: 'rubles', nominal: 50, number: 123443567},
    {banknote: 'dollar', nominal: 50, number: 12345567},
    {banknote: 'yani', nominal: 50, number: 12345667},
    {banknote: 'dollar', nominal: 50, number: 12374567}])


  return (
      <div className="App">
        <CurrencyFilter state={state}/>
      </div>
  );
}

export default App;

