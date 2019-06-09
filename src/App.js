import React, { Component } from 'react'
import {BrowserRouter} from "react-router-dom"
import Routeviews from "./routes/route.views"
import routes from "./routes/index"
import {Provider} from "react-redux"
import store from "./store/index"
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                        <Routeviews routes={routes} />
                </BrowserRouter>
            </Provider>
        )
    }
}
export default App;
