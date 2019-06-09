import React, { Component } from 'react'
import Routeviews from "../../routes/route.views"

class Web extends Component {
    render() {
        let {routes} = this.props;
        return (
            <div className="web">
                <Routeviews routes={routes}/>
            </div>
        )
    }
}
export default Web;