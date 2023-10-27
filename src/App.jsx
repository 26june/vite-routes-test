import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Projects from "./assets/pages/Projects";

function App() {
  return (
    <div className="App">
      {/* <Link to="/" className="HomeButtonContainer">
        <div className="HomeButton">Hello</div>
      </Link> */}
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/projects" element={<Projects></Projects>} />
      </Routes>
    </div>
  );
}

export default App;
