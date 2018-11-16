import React, { Component } from "react";
import EditSetting from "../src/modules/editSettings/editSetting";
import Settings from "../src/modules/settings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageTransition from "react-router-page-transition";

class App extends Component {
    render() {
        return (
            <Router>
                <Route
                    render={({ location }) => (
                        <PageTransition timeout={1000}>
                            <Switch location={location}>
                                <Route exact path="/" component={Settings} />
                                {/* <Route path="/list" component={List}/> */}
                                <Route
                                    path="/settings/:setId"
                                    component={EditSetting}
                                />
                            </Switch>
                        </PageTransition>
                    )}
                />
            </Router>
        );
    }
}

export default App;
