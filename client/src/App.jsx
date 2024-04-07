import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import AppHeader from "./components/Header";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <AppHeader />

      <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
