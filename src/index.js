import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
import {Provider} from 'react-redux'
import ErrorBoundary from './pages/common/ErrorBoundary/ErrorBoundary'
import * as serviceWorker from './serviceWorker'



ReactDOM.render(
    (
     <ErrorBoundary>
        <Provider store={store}>
        <App/>
        </Provider>
    </ErrorBoundary>   
    ),
    document.getElementById('root')

);
serviceWorker.unregister();
