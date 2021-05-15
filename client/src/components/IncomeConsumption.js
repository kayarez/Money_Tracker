import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const IncomeConsumption = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);


  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const consumption = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
    return (
      <div className="inc-con-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">{income}</p>
        </div>
        <div>
          <h4>Consumption</h4>
          <p id="money-minus" className="money minus">{consumption}</p>
        </div>
      </div>
    )
}
