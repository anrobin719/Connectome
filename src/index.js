import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from "@material-ui/styles";
import { createStore, combineReducers } from 'redux';

import App from './App';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';
import editorReducer from './store/reducers/editor';


const rootReducer = combineReducers({
    editor: editorReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <StylesProvider injectFirst>
                <ScrollToTop>
                    <App />
                </ScrollToTop>
            </StylesProvider>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
