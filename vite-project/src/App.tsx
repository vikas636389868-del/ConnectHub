import { Routes, Route } from "react-router-dom";
import Splash from "./Splash";
import Login from "./login";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;