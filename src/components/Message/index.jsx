import React, { useEffect, useState } from "react";
import { app, db } from "../../services/FirebaseConfig";
import { getAuth } from "firebase/auth";

// ESTILIZAÇÃO
import {
  AreaMessage,
  MyMessage,
  IdClient,
  MessageUser,
  UserMessage,
} from "./styles";

const auth = getAuth(app);

export function Message({ Text, uid }) {
  const [messageUser, setMessageUser] = useState(false);

  useEffect(() => {
    const currentUserUid = auth.currentUser?.uid;

    setMessageUser(currentUserUid ? uid === currentUserUid : false);
  }, [uid]);

  return (
    <>
      <AreaMessage>
        {/* <MyMessage>
          <MessageUser>Oi!</MessageUser>
        </MyMessage>

        <UserMessage>
          <MessageUser>Oie!!</MessageUser>
        </UserMessage> */}

        {messageUser ? (
          <MyMessage>
            <MessageUser>{Text}</MessageUser>
          </MyMessage>
        ) : (
          <UserMessage>
            <MessageUser>{Text}</MessageUser>
          </UserMessage>
        )}
      </AreaMessage>
    </>
  );
}
