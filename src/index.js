import React from "react";
import ReactDOM from "react-dom";
import Header from "./js/header.jsx";
import Countdown from "./js/countdown.jsx";
import Resources from "./js/resources.jsx";
import Schedule from "./js/schedule.jsx";
import Gitlab from "./js/gitlab.jsx";
import "./favicons/favicons";
import "./index.scss";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

class Main extends React.Component {

    render() {
        return (
            <div>
                <Countdown />
                <Resources />
                <p>Note: all times below are in PT (California time)</p>
                <Schedule />
                <Gitlab />
                
            </div>
        );
    }
}

function CustomRedirect({ from, to }) {
    return (
        <Route
            exact
            path={from}
            component={() => {
                window.location = to;
                return null;
            }}
        />
    );
}

function App() {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    {/* <CustomRedirect
                        from="/faq"
                        to=""
                    /> */}
                    <Route exact path="/" component={Main} />
                </Switch>
            </Router>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));