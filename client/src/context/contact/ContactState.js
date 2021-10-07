import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Bob Smith',
                email: 'bob@bob.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Sally Smith',
                email: 'sally@sally.com',
                phone: '222-222-2222',
                type: 'professional'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //ADD CONTACT
    //DELTE CONTACT
    //SET CURRENT CONTACT
    //CLEAR CURRENT CONTACT
    //UPDATE CONTACT
    //FILTER CONTACTS
    //CLEAR FILTER

    return (
        <contactContext.Provider
            value={{
                contacts: state.contacts
            }}>
            {props.children}
        </contactContext.Provider>
    )
};

export default ContactState;
