'use strict'

import App from './app'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer as AppContainerHotLoader } from 'react-hot-loader'

const renderApp = (NextApp) => {
    render(
        <AppContainerHotLoader>
            <App />
        </AppContainerHotLoader>,
        document.querySelector('[data-js="app"]')
    )
}

renderApp(App)

if (module.hot){
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default

        renderApp(NextApp)
    })
}