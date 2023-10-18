import "./App.css";
import Navbar from "./components/Navbar";
import Navbarc from "./components/Navbarc";
import Hedarc from "./components/Hedarc";
import Hedar from "./components/Hedar";
import Create from "./components/Create";
import Footer from "./components/Footer";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="site-wrapper">
        <div className="pt-table desktop-768">
          <div className="pt-tablecell page-home relative">
            <div className="overlay"></div>

            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                  <div className="page-title  home text-center">
                    <Routes>
                      <Route exact path="/create" element={<Hedarc />} />
                    </Routes>
                    <Routes>
                      <Route exact path="/read" element={<Hedarc />} />
                    </Routes>
                    <Routes>
                      <Route exact path="/update" element={<Hedarc />} />
                    </Routes>
                    <Routes>
                      <Route exact path="/" element={<Hedar />} />
                    </Routes>
                  </div>
                  <div className="hexagon-menu clear">
                    <Routes>
                      <Route exact path="/" element={<Navbarc />} />
                    </Routes>
                    <div>
                      <Routes>
                        <Route exact path="/create" element={<Create />} />
                      </Routes>
                    </div>
                    <div style={{ marginTop: 20 }}>
                      <Routes>
                        <Route exact path="/read" element={<Read />} />
                      </Routes>
                    </div>
                    <Routes>
                      <Route exact path="/update" element={<Update />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
