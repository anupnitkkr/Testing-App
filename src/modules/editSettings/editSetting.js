import React, { Component } from "react";
class EditSettings extends Component {
  return(
    <div className = "test">
      <div className="edit-page-wrapper transition-appear transition-appear-active transition-item">
        <div className="back-btn">
          <i className="fas fa-angle-left arrow" />
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
      </div>
    </div>
  );
}

export default App;