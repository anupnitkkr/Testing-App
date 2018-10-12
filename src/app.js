import React from "react";
import ReactDOM from "react-dom";
import Settings from "../src/modules/settings/settings";
import EditSetting from "../src/modules/editSettings/editSetting";
import viewSettings from "../src/modules/viewSettings";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Settings}>
            <IndexRoute component={viewSettings} />
            <Route path="/settings/:setId" component={EditSetting} />
        </Route>
    </Router>,
    document.getElementById("app")
);
