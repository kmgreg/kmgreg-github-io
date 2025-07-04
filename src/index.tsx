import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ChordApp from './components/chordtrainer/chordapp';
import SlideRule from './components/sliderule/sliderule';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, {
    path: 'chordtrainer',
    element: <ChordApp />
  }, {
    path: 'sliderule',
    element: <SlideRule />
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
