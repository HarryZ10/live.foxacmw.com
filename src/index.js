import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Header from "./js/header.jsx";
import Countdown from "./js/countdown.jsx";
import Resources from "./js/resources.jsx";
import Schedule from "./js/schedule.jsx";
import Leaderboard from "./js/leaderboard.jsx";
import Footer from "./js/footer.jsx";
import PrivacyPolicy from "./js/privacypolicy.jsx";

import "./favicons/favicons";
import "./index.scss";
import './fonts/ThirstyScriptExtraBold.otf';

class Main extends React.Component {

    render() {
        return (
            <div>
                <Countdown />
                <Resources />
                <p>Note: all times below are in PT (California time)</p>
                <Schedule />
                <Leaderboard />
                <Footer />
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
                    <CustomRedirect
                        from="/code-of-conduct"
                        to="https://docs.google.com/document/d/1Hi5ZcmiPWlOHmlU4PL8dw2ptkRCGDnMDkiTp01yxloU/edit"
                    />
                    <Route exact path="/" component={Main} />
                    <Route exact path="/schedule" component={Schedule} />
                    <Route exact path="/leaderboard" component={Leaderboard} />
                    <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                </Switch>
            </Router>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));