import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import all from './reducers';
import './index.less';
import Main from './main';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(all, window.STATE_FROM_SERVER);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
