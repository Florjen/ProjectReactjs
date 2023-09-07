import React from 'react';
import './App.css';
import {Header} from './components/Header'
import  {Balance} from './components/Balance'
import { IncomeExxpenses } from './components/IncomeExxpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
 <Header/>
 <div className="container">
  <Balance/>
  <IncomeExxpenses/>
  <TransactionList/>
  <AddTransaction/>
  </div>
 </GlobalProvider>
 )
}

export default App;
