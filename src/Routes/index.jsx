import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { Signin } from "../pages/Signin";
import { ChatPage } from "../pages/ChatPage";

export function Routes() {
  const { user } = useAuth();

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
