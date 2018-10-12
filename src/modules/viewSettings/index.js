import React, { Component } from "react";
class App extends Component {
  return (
    <div>
      <div className="myaccount-page-wrapper transition-leave transition-leave-active transition-item">
        <ul className="main-tabs">
          <li className="ripple active">
            <i className="fas fa-cog" />
            <span>Settings</span>
          </li>
          <li className="ripple">
            <i className="fas fa-cog" />
            <span>Chat</span>
          </li>
          <li className="ripple">
            <i className="fas fa-cog" />
            <span>Post</span>
          </li>
          <li className="ripple">
            <i className="fas fa-cog" />
            <span>Video</span>
          </li>
          <li className="ripple">
            <i className="fas fa-cog" />
            <span>Friends</span>
          </li>
        </ul>
        <div className="tabs-wrap">
          <a href="#" className="active">
            Edit
                    </a>
          <span className="pipe" />
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
                  <i className="far fa-user" />
                  <span className="del-pic">&times;</span>
                </div>
              </li>
              <li>
                <div className="photo">
                  <i className="far fa-user" />
                  <span className="del-pic">&times;</span>
                </div>
              </li>
              <li>
                <div className="photo">
                  <i className="far fa-user" />
                  <span className="del-pic">&times;</span>
                </div>
              </li>
              <li>
                <div className="photo">
                  <i className="far fa-user" />
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
              <i className="fas fa-angle-right arrow" />
            </li>
            <li className="ripple">
              <div className="title">Gender</div>
              <div className="sub-txt">Male</div>
              <i className="fas fa-angle-right arrow" />
            </li>
            <li className="ripple">
              <div className="title">Gender</div>
              <div className="sub-txt">Male</div>
              <i className="fas fa-angle-right arrow" />
            </li>
            <li className="ripple">
              <div className="title">Gender</div>
              <div className="sub-txt">Male</div>
              <i className="fas fa-angle-right arrow" />
            </li>
            <li className="ripple">
              <div className="title">Gender</div>
              <div className="sub-txt">Male</div>
              <i className="fas fa-angle-right arrow" />
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
              <i className="fas fa-angle-right arrow" />
            </li>
            <li className="ripple">
              <div className="title">Language</div>
              <i className="fas fa-angle-right arrow" />
            </li>
            <li className="ripple">
              <div className="title">Mobile Number</div>
              <i className="fas fa-angle-right arrow" />
            </li>
            <li className="ripple">
              <div className="title">Email Address</div>
              <i className="fas fa-angle-right arrow" />
            </li>
            <li className="ripple">
              <div className="title">Verify FB</div>
              <i className="fas fa-angle-right arrow" />
            </li>
            <li className="ripple">
              <div className="title">Push Notification</div>
              <i className="fas fa-angle-right arrow" />
            </li>
            <li className="ripple">
              <div className="title">Logout</div>
              <i className="fas fa-angle-right arrow" />
            </li>
            <li className="ripple">
              <div className="title">Delete Account</div>
              <i className="fas fa-angle-right arrow" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;