import React, { useRef } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase/firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelId, channelName, chatRef }) => {
  const inputRef = useRef(null);
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: inputRef.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    });
    inputRef.current.value = "";
    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ChatInputContainer>
      <form>
        <Input
          ref={inputRef}
          placeholder={`Send a message to # ${channelName}`}
        />
        <button type="submit" hidden onClick={sendMessage}>
          send
        </button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
`;
const Input = styled.input``;
