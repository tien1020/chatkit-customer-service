import React from "react";
import Proptypes from "prop-types";

const ChatWidget = props => {
  const { newMessage, sendMessage, handleInput, currentUser, messages } = props;

  const ChatSession = messages.map(message => {
    const user = message.senderId === currentUser.id ? "user" : "support";
    return <span className={`${user} message`}>{message.text}</span>;
  });

  return (
    <section className="chat">
      <div className="chat-widget">
        <header className="chat-header">
          <h2>Lets chat.</h2>
        </header>
        <section className="chat-body">{ChatSession}</section>

        <form onSubmit={sendMessage} className="message-form">
          <input
            className="message-input"
            autoFocus
            name="newMessage"
            placeholder="Write a message then click ENTER"
            onChange={handleInput}
            value={newMessage}
          />
        </form>
      </div>
    </section>
  );
};

ChatWidget.proptypes = {
  newMessage: Proptypes.string.isRequired,
  handleInput: Proptypes.func.isRequired,
  sendMessage: Proptypes.func.isRequired,
  messages: Proptypes.arrayOf(Proptypes.object).isRequired,
  currentUser: Proptypes.object.isRequired
};

export default ChatWidget;
