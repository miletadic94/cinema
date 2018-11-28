import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import './assets/styles/index.css';
import Routes from "./routes"
import configureStore from './createStore';


const store = configureStore()

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();