import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {IncidentStore} from './store/IncidentStore';
import IncidentApp from './containers/Incident';

function App() {
  return (
    <Provider store={IncidentStore}>
      <IncidentApp />
    </Provider>
  );
}

export default App;
