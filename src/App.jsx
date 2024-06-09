import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import Alltodo from "./components/Alltodo";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/Add" element={<Add />} />
        <Route path="/Todo" element={<Alltodo />} />
        {/* <Route path="/Completedtodo" element={<Completedtodo />} /> */}
      </Routes>
    </>
  );
}

export default App;
