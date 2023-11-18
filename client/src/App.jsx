import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Location from "./Location";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} /> {/* SignUp route */}
        <Route path="/location" element={<Location />} /> {/* New page route */}
      </Routes>
    </Router>
  );
}

export default App;
