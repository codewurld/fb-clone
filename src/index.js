import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './ContextProvider';
import { reducer, initialState } from './reducer';
// import reducer from './reducer';

ReactDOM.render(
  <React.StrictMode>
    {/* user login matched with app */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>



  </React.StrictMode>,
  document.getElementById('root')
);

