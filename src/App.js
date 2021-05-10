import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balances } from './components/Balances';
import { IncomeConsumption } from './components/IncomeConsumption';
import { Transaction } from './components/Transaction';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
<div>
        <Header />
              <div className="container">
        <Balances />
        <IncomeConsumption />
        <Transaction />
        <AddTransaction />
        </div>
        </div>

  );
}

export default App;
