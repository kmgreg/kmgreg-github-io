import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ChordApp from './components/chordtrainer/chordapp';
import SlideRule from './components/sliderule/sliderule';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/chordtrainer' element={<ChordApp/>} />
        <Route path='/sliderule' element={<SlideRule/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
