import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AppAccordion from './AppAccordion';
// import AppTipCalculator from './AppTipCalculator'
// import AppEatAndSplit from './AppEatAndSplit'
import AppUsePopcorn from "./AppUsePopcorn";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<AppAccordion />*/}
        {/*  <AppTipCalculator />*/}
        {/*  <AppEatAndSplit />*/}
        <AppUsePopcorn/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
