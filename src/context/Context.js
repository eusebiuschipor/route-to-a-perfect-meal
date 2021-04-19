import { createContext } from 'react';

export const themes = {
    normal: {
        color: 'black',
        fontSize: '30px'
    },
    blue: {
        color: 'blue',
        fontSize: '40px'
    }
};

export const users = [
    {
        id: 1,
        username: 'mike'
    },
    {
        id: 2,
        username: 'mark'
    }
];

export const Context = createContext({
    theme: null,
    user: null,
    applicationName: null
});