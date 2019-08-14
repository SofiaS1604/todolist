import React from "react";
import ReactDOM from "react-dom";
import App from "view/App";
import {AppContainer} from "react-hot-loader";
import {store} from "./store"
import {Provider} from "react-redux";

const renderApp = (AppComponent, storeObj) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={storeObj}>
                <AppComponent/>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

store.then((storeObj) => {
    renderApp(App, storeObj);

    if (module.hot) {
        module.hot.accept('view/App', () => {
            const NextApp = require('view/App').default;
            renderApp(NextApp, storeObj);
        });
    }
});