import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from "./Pages/SignUp";
import Location from "./Location";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/EC_23/'}>
      <Routes>
        <Route path="/" element={<SignUp />} /> {/* SignUp route */}
        <Route path="/location" element={<Location />} /> {/* New page route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;