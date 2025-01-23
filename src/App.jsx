import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import HowItWorksDetails from "./pages/HowItWorksDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorksDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
