import React from "react";
import proptypes from "prop-types";

import "./Dialog.css";

const Dialog = props => {
  const { username, handleInput, launchChat } = props;

  return (
    <div className="dialog-container">
      <div className="dialog">
        <form className="dialog-form" onSubmit={launchChat}>
          <label className="username-label" htmlFor="username">
            What is your name?
          </label>
          <input
            id="username"
            className="username-input"
            autoFocus
            type="text"
            name="userId"
            value={username}
            onChange={handleInput}
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

Dialog.proptypes = {
  username: proptypes.string.isRequired,
  handleInput: proptypes.func.isRequired,
  launchChat: proptypes.func.isRequired
};

export default Dialog;
