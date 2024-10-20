import { createAction } from '@reduxjs/toolkit';

export const addIncidentAction = createAction('ADD', (item) => ({
    payload: {
        item: item
    }
}));

export const deleteIncidentAction = createAction('DELETE', (id) => ({
    payload: {
        id: id
    }
}));

export const checkIncidentAction = createAction('CHECK', (id) => ({
    payload: {
        id: id
    }
}));

export const loadAllIncidentsAction = createAction('LOAD_ALL', (IncidentList) => ({
    payload: {
        IncidentList: IncidentList
    }
}));