import { Routes, Route } from "react-router-dom";
import { Signin } from "../pages/Signin";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
    </Routes>
  );
}
