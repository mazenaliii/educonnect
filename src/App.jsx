import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ResourcesPage from "./pages/ResourcesPage";
import "./App.css";
import ProtectRoute from "./components/ProtectRoute";
import Chat from "./pages/ChatBot";

function App() {
  return (
    <Routes>
      <Route
        path="/auth/sign-up"
        element={
          <ProtectRoute>
            <SignUpPage />
          </ProtectRoute>
        }
      />
      <Route
        path="/auth/sign-in"
        element={
          <ProtectRoute>
            <SignInPage />
          </ProtectRoute>
        }
      />
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/chatbot" element={<Chat />} />
    </Routes>
  );
}

export default App;
