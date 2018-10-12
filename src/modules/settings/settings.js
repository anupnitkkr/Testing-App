import React from "react";
import PageTransition from "react-router-page-transition";

export default props => (
    <div>
        <PageTransition timeout={500}>{props.children}</PageTransition>
    </div>
);
