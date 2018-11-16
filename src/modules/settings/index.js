import React, { Component } from "react";
class ViewSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "view"
        };
        this.goToItem = this.goToItem.bind(this);
        this.viewClick = this.viewClick.bind(this);
        this.editClick = this.editClick.bind(this);
    }
    goToItem() {
        this.props.history.push({
            pathname: "/settings/anup"
        });
    }
    viewClick(event) {
        event.preventDefault();
        console.log(event.target);
    }
    editClick(event) {
        event.preventDefault();
        console.log(event.target);
    }
    render() {
        return (
            <div className="transition-item first-page myaccount-page-wrapper">
                <ul className="main-tabs">
                    <li className="ripple active" onClick={this.goToItem}>
                        <i className="web web-settings" />
                        <span>Settings</span>
                    </li>
                    <li className="ripple">
                        <i className="web web-settings" />
                        <span>Chat</span>
                    </li>
                    <li className="ripple">
                        <i className="web web-settings" />
                        <span>Post</span>
                    </li>
                    <li className="ripple">
                        <i className="web web-settings" />
                        <span>Video</span>
                    </li>
                    <li className="ripple">
                        <i className="web web-settings" />
                        <span>Friends</span>
                    </li>
                </ul>
                <div className="tabs-wrap" onClick={this.editClick}>
                    <a href="#" className="active">
                        Edit
                    </a>
                    <span className="pipe" onClick={this.tabClick} />
                    <a href="#">View</a>
                </div>

                <div className="myPhotos-section">
                    <div className="title-wrap">
                        <h2>My Photos</h2>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <div className="photo">
                                    <i className="web web-user" />
                                    <span className="del-pic">&times;</span>
                                </div>
                            </li>
                            <li>
                                <div className="photo">
                                    <i className="web web-user" />
                                    <span className="del-pic">&times;</span>
                                </div>
                            </li>
                            <li>
                                <div className="photo">
                                    <i className="web web-user" />
                                    <span className="del-pic">&times;</span>
                                </div>
                            </li>
                            <li>
                                <div className="photo">
                                    <i className="web web-user" />
                                    <span className="del-pic">&times;</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="aboutMe-section">
                    <div className="title-wrap">
                        <h2>About Me</h2>
                    </div>
                    <ul className="links-list">
                        <li className="ripple">
                            <div className="title">Gender</div>
                            <div className="sub-txt">Male</div>
                            <i className="web web-angle-right arrow" />
                        </li>
                        <li className="ripple">
                            <div className="title">Gender</div>
                            <div className="sub-txt">Male</div>
                            <i className="web web-angle-right arrow" />
                        </li>
                        <li className="ripple">
                            <div className="title">Gender</div>
                            <div className="sub-txt">Male</div>
                            <i className="web web-angle-right arrow" />
                        </li>
                        <li className="ripple">
                            <div className="title">Gender</div>
                            <div className="sub-txt">Male</div>
                            <i className="web web-angle-right arrow" />
                        </li>
                        <li className="ripple">
                            <div className="title">Gender</div>
                            <div className="sub-txt">Male</div>
                            <i className="web web-angle-right arrow" />
                        </li>
                    </ul>
                </div>

                <div className="myAccount-section">
                    <div className="title-wrap">
                        <h2>My Account</h2>
                    </div>
                    <ul className="links-list">
                        <li className="ripple">
                            <div className="title">Upgrade Account</div>
                            <i className="web web-angle-right arrow" />
                        </li>
                        <li className="ripple">
                            <div className="title">Language</div>
                            <i className="web web-angle-right arrow" />
                        </li>
                        <li className="ripple">
                            <div className="title">Mobile Number</div>
                            <i className="web web-angle-right arrow" />
                        </li>
                        <li className="ripple">
                            <div className="title">Email Address</div>
                            <i className="web web-angle-right arrow" />
                        </li>
                        <li className="ripple">
                            <div className="title">Verify FB</div>
                            <i className="web web-angle-right arrow" />
                        </li>
                        <li className="ripple">
                            <div className="title">Push Notification</div>
                            <i className="web web-angle-right arrow" />
                        </li>
                        <li className="ripple">
                            <div className="title">Logout</div>
                            <i className="web web-angle-right arrow" />
                        </li>
                        <li className="ripple">
                            <div className="title">Delete Account</div>
                            <i className="web web-angle-right arrow" />
                        </li>
                    </ul>
                </div>

                <div className="inner-page-wrapper view-tab-content hide">
                    <div className="profile-img">Image placeholder</div>

                    <h2 className="u-case">About Me</h2>

                    <div className="feature-h-scroll-wrap">
                        <ul className="list">
                            <li>
                                <i className="web web-settings" />
                                <span>34</span>
                            </li>
                            <li>
                                <i className="web web-settings" />
                                <span>5.7'</span>
                            </li>
                            <li>
                                <i className="web web-settings" />
                                <span>San Francisco</span>
                            </li>
                            <li>
                                <i className="web web-settings" />
                                <span>No</span>
                            </li>
                            <li>
                                <i className="web web-settings" />
                                <span>No</span>
                            </li>
                        </ul>
                    </div>

                    <ul className="view-list">
                        <li>
                            <i className="web web-briefcase" />
                            <span className="txt">Founder - NearGroup App</span>
                        </li>
                        <li>
                            <i className="web web-school" />
                            <span className="txt">
                                Indian Institute of Technology
                            </span>
                        </li>
                        <li>
                            <i className="web web-book" />
                            <span className="txt">
                                Buddhist, Catholic, Christian, Hindu, Jewish,
                                Muslim, Spiritual, Agnostic, Athiest, Other
                            </span>
                        </li>
                        <li>
                            <i className="web web-settings" />
                            <span className="txt">Conservative</span>
                        </li>
                        <li>
                            <i className="web web-location" />
                            <span className="txt">New Delhi, India</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ViewSettings;
