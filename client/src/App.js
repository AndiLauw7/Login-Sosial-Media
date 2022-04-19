import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home";
import { Login } from "./pages/Login";
import { Post } from "./pages/Post";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Navbar user={user} />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            exact
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
