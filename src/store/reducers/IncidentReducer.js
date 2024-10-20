import { createReducer } from '@reduxjs/toolkit';
import {
    addIncidentAction,
    checkIncidentAction,
    deleteIncidentAction,
    loadAllIncidentsAction
} from '../../actions/IncidentActions';

const initState = {
    IncidentList: []
};

export default createReducer(
    initState,
    {
        [addIncidentAction]: (state, action) => ({
            IncidentList: state.IncidentList.concat(action.payload.item)
        }),
        [deleteIncidentAction]: (state, action) => ({
            IncidentList: state.IncidentList.filter(item => item.id !== action.payload.id)
        }),
        [checkIncidentAction]: (state, action) => ({
            IncidentList: state.IncidentList.map(
                item => item.id === action.payload.id ? { ...item, status: !item.status } : item
            )
        }),
        [loadAllIncidentsAction]: (_, action) => ({
            IncidentList: action.payload.IncidentList
        })
    }
);