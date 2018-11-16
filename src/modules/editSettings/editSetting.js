import React, { Component } from "react";
class EditSettings extends Component {
    constructor(props) {
        super(props);
    }
    goBack() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="transition-item second-page inner-page-wrapper">
                <div className="back-btn" onClick={this.goBack.bind(this)}>
                    <i className="web web-angle-left arrow" />
                </div>
                <h2>Gender</h2>
                <div className="form-select-options">
                    <form action="">
                        <ul>
                            <li>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        id="male"
                                        name="gender"
                                    />
                                    <label htmlFor="male">Male</label>
                                </div>
                            </li>
                            <li>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        id="female"
                                        name="gender"
                                    />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
                <div className="ethnicity-wrap">
                    <h2>Ethnicity</h2>
                    <div className="options">
                        <ul className="">
                            <li className="selected">American Indian</li>
                            <li>Black African/Descent</li>
                            <li>East Asian</li>
                            <li>Hispanic/Latino</li>
                            <li>Middle Eastern</li>
                            <li>Pacific Islander</li>
                            <li>South Asian</li>
                            <li>White/Caucasian</li>
                            <li>Other</li>
                        </ul>
                        <div className="radio radio-inline">
                            <input type="radio" id="notToSay" name="prefer" />
                            <label htmlFor="notToSay">Prefer Not to Say</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditSettings;
