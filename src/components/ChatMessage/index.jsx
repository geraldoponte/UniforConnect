import React from "react";

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img
        src={
          photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
        }
        alt="Foto do usuário"
      />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
