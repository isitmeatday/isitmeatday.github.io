import React from 'react';
import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/react';

const theFirstMeatDay = new Date(2023, 10, 1);

const isItMeatDay = (): boolean => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  return currentMonth === theFirstMeatDay.getMonth() && currentDay === theFirstMeatDay.getDate();
}

function App() {
  return (
    isItMeatDay() ? 
    <div className={'container'}>
      <h1>Yes</h1>
    </div> : 
    <div className={'container'}>
      <h1>No</h1>
    </div>
  );
}

export default App;
