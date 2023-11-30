import React, { createContext, useEffect, useState, useContext } from "react";
import { app, db } from "../services/FirebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  OAuthProvider,
  OAuthCredential,
  signInWithPopup,
} from "firebase/auth";
import { set, ref, getDatabase, get } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  //Inicializar o auth
  const auth = getAuth(app);
  //Inicializar o database
  const database = db;

  useEffect(() => {
    async function loadStorage() {
      //pegar informações do AsyncStorage
      const storageUser = await AsyncStorage.getItem("Auth_user");

      if (storageUser) {
        //enviando as informações para o setUser. O 'parse' serve para transformar uma string em objeto
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  // SINGNIN
  async function signIn() {
    signInWithEmailAndPassword(auth, email, password)
      //Se der tudo certo
      .then(async (value) => {
        //pegando o id
        let uid = value.user.uid;
        //capturar os dados do usuário
        await get(ref(database, `users/${uid}`)).then((snapshot) => {
          let userData = {
            uid: uid,
            nome: snapshot.val().nome,
            email: value.user.email,
          };

          setUser(userData);
          storageUser(userData); //armazenar informações do usuário
        });
      })
      .catch((error) => {
        //Erro padrão do firebase
        alert(error.code);
      });
  }

  // SINGIN COM GOOGLE
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      // O login foi bem-sucedido, você pode acessar o usuário através de result.user
      const user = result.user;

      const userData = {
        uid: user.uid,
        nome: user.displayName,
        email: user.email,
      };

      setUser(userData);
      storageUser(userData); //armazenar informações do usuário
    } catch (error) {
      // Ocorreu um erro durante o login com o Google
      console.log(error);
    }
  }

  // SIGNUP USUÁRIO
  async function signUp() {
    //Criar um usuário no firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid; // acessar o id do usuário

        await set(ref(database, `users/${uid}`), {
          nome: nome,
          email: email,
        }).then(() => {
          let data = {
            uid: uid,
            nome: nome,
            email: value.user.email,
          };
          setUser(data);
          storageUser(data); //armazenar informações do usuário
        });
      })
      .catch((error) => {
        //Erro padrão do firebase
        alert(error.code);
      });
  }

  // SIGNUP USUÁRIO COM GOOGLE
  async function signUpWithGoogle() {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential?.accessToken;
      const user = result.user;

      // Verifique se o usuário já existe no banco de dados
      const userRef = ref(database, `users/${user.uid}`);
      const snapshot = await get(userRef);

      if (!snapshot.exists()) {
        // Crie um novo usuário no banco de dados
        const newUser = {
          uid: user?.uid,
          nome: user.displayName,
          email: user.email,
        };

        await set(userRef, newUser);

        setUser(newUser);
        storageUser(newUser); //armazenar informações do usuário
      }

      // alert("Usuário registrado com sucesso!")

      // Faça o que for necessário com o usuário logado
      console.log("Usuário logado:", user);
    } catch (error) {
      // Lidar com erros de autenticação
      console.log("Erro ao fazer login com o Google:", error);
    }
  }

  // armazenar credenciais do usuário
  async function storageUser(data) {
    //transformando os dados para string
    await AsyncStorage.setItem("Auth_user", JSON.stringify(data));
  }

  //Função de deslogar
  async function signOut() {
    await auth.signOut();
    await AsyncStorage.clear().then(() => {
      //repassando como null para deslogar
      setUser(null);
    });
  }

  return (
    //Tudo que tiver dentro do AuthContext.Provider pode ser acessado em qualquer canto da página, para isso foi repassado o children como parâmetro
    //Recebe como parâmetro o signed e converte para booleano, com "!!"
    //Ele está deixando 'aberto' o user, o signup e o SignIn
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signUp,
        signUpWithGoogle,
        signIn,
        signInWithGoogle,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
