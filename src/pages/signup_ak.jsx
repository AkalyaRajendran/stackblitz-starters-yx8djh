import React from 'react';
function Signup() {
  return (
    <div>
      <div className="signup">
        <div className="signupForhtmlm">
          <label Forhtml="">
            <i className="fa-solid fa-user"></i> Username
          </label>
          <input type="text" placeholder="Enter username" id="name" />
        </div>
        <div className="signupForhtmlm">
          <label Forhtml="">
            <i className="fa-solid fa-lock"></i> Password
          </label>
          <input type="text" placeholder="Enter password" />
        </div>
        <div className="signupForhtmlm">
          <label Forhtml="">
            <i className="fa-solid fa-unlock"></i> Confirm Password
          </label>
          <input type="text" placeholder="Re-enter password" />
        </div>
        <div className="signupForhtmlm btn">
          <button>Signup</button>
        </div>
      </div>
    </div>
  );

  export default Signup;
}
