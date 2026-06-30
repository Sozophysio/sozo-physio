import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ServicePage from "./pages/ServicePage";
import ConditionPage from "./pages/ConditionPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/conditions/:slug" element={<ConditionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
