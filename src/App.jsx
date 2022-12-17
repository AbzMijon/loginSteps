import React from "react"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import RootRoute from "./Routes/RootRouter";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from './store/instanse';
import store from './store/instanse';

function App() {
    return (
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={'loading...'}>
                    <BrowserRouter>
                        <RootRoute/>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
    )
}

export default App;