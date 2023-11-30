import React, { useState, useRef } from "react";
import {
  addDoc,
  collection,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app, db } from "../../services/FirebaseConfig";

import { useCollectionData } from "react-firebase-hooks/firestore";

// COMPONENTS
import { MenuGrupos } from "../../components/MenuGrupos";
import { Select } from "../../components/Select";
import { ButtonGrupo } from "../../components/ButtonGrupo";
import { Message } from "../../components/Message";

// ESTILIZAÇÃO
import {
  StyledRoutesPageContainer,
  Div,
  AreaPai,
  Area,
  BoxMessage,
  Formulario,
  BotaoEnviar,
  AreaBotao,
} from "./styles";
import { IoIosSend } from "react-icons/io";

const auth = getAuth(app);

export function ChatPage() {
  // const dummy = useRef();
  const [formValue, setFormValue] = useState("");
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(q, { idField: "id" });

  const sendMessage = async (e) => {
    e.preventDefault();
    const { photoURL, uid } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      uid,
      photoURL,
      createdAt: serverTimestamp(),
    });
    setFormValue("");
    // dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <StyledRoutesPageContainer>
        <MenuGrupos />
        <Div>
          <AreaPai>
            <Area>
              {messages &&
                messages.map((msg, index) => (
                  <Message key={index} Text={msg.text} uid={msg.uid} />
                ))}
            </Area>
            <Formulario onSubmit={sendMessage}>
              <BoxMessage
                type="text"
                placeholder="Mensagem..."
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
              />
              {/* <input
                type="text"
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
              /> */}
              <AreaBotao>
                <BotaoEnviar type="submit" disabled={!formValue}>
                  <IoIosSend size={22} color="white" />
                </BotaoEnviar>
              </AreaBotao>
            </Formulario>
          </AreaPai>
        </Div>
      </StyledRoutesPageContainer>
    </>
  );
}
