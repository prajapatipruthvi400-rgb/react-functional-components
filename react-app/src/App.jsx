import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
      <div>
            <h2>Home Page</h2>
                  <p>Welcome to the React SPA!</p>
                      </div>
                        );
                        }

                        function About() {
                          return (
                              <div>
                                    <h2>About Page</h2>
                                          <p>This is the About page.</p>
                                              </div>
                                                );
                                                }

                                                function Contact() {
                                                  return (
                                                      <div>
                                                            <h2>Contact Page</h2>
                                                                  <p>This is the Contact page.</p>
                                                                      </div>
                                                                        );
                                                                        }

                                                                        function App() {
                                                                          return (
                                                                              <BrowserRouter>
                                                                                    <div className="app">
                                                                                            <h1>React SPA with Router</h1>

                                                                                                    <nav>
                                                                                                              <Link to="/">Home</Link>
                                                                                                                        <Link to="/about">About</Link>
                                                                                                                                  <Link to="/contact">Contact</Link>
                                                                                                                                          </nav>

                                                                                                                                                  <Routes>
                                                                                                                                                            <Route path="/" element={<Home />} />
                                                                                                                                                                      <Route path="/about" element={<About />} />
                                                                                                                                                                                <Route path="/contact" element={<Contact />} />
                                                                                                                                                                                        </Routes>
                                                                                                                                                                                              </div>
                                                                                                                                                                                                  </BrowserRouter>
                                                                                                                                                                                                    );
                                                                                                                                                                                                    }

                                                                                                                                                                                                    export default App;