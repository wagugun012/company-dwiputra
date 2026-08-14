import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <div className="app-layout d-flex flex-column min-vh-100">
      <NavbarComponent />

      <main className="flex-fill">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/kelas" Component={KelasPage} />
          <Route path="/faq" Component={FaqPage} />
        </Routes>
      </main>

      <FooterComponent />
    </div>
  );
}

export default App;
