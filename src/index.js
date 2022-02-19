import React from "react";
import ReactDOM from "react-dom";
import Header from "./js/header.jsx";
import Countdown from "./js/countdown.jsx";
import Resources from "./js/resources.jsx";
import Schedule from "./js/schedule.jsx";
import Leaderboard from "./js/leaderboard.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./favicons/favicons";
import "./index.scss";
import './fonts/ThirstyScriptExtraBold.otf';

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
                <Leaderboard />       
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