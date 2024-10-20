import { createStore } from '@reduxjs/toolkit';
import IncidentReducer from './reducers/IncidentReducer';

export const IncidentStore = createStore(IncidentReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
