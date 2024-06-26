import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import useReducer from "./features/userReducer"

import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const store = configureStore({
    reducer: {
        user: useReducer,
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
