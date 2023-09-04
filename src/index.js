import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //! <React.StrictMode> ei gulo k soria dilam karon strint mode 2 bar kore useEffect k run korchilo, problem hchhilo
    <App />
  // </React.StrictMode>
);

