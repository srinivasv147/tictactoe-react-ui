import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers/initReducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter><App/></BrowserRouter>
    </Provider> 
    , document.getElementById('root'));