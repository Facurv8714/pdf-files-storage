import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

// Componentes de las páginas
import Home from "./pages/Home";
import Documents from "./pages/Documents";
import Reports from "./pages/Reports";
import Guides from "./pages/Guides";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <h1>PDF Download App</h1>
            <ul className="nav-menu">
              <li>
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/documents" className="nav-link">
                  Documentos
                </Link>
              </li>
              <li>
                <Link to="/reports" className="nav-link">
                  Reportes
                </Link>
              </li>
              <li>
                <Link to="/guides" className="nav-link">
                  Guías
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/guides" element={<Guides />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
