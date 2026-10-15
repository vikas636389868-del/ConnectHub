import { Routes, Route } from "react-router-dom";
import Splash from "./Splash";
import Login from "./login";
import Home from "./Home";
import Social from "./Social";
import Compare from "./Compare";
import Profile from "./Profile";
import ProductDetail from "./ProductDetail";   // ← yeh add karo

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/social" element={<Social />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product/:id" element={<ProductDetail />} />  {/* ← yeh add karo */}
    </Routes>
  );
}

export default App;