import { useState } from "react";
import "./App.css";

function Student({ name, course }) {
  return (
      <div className="student">
            <h2>{name}</h2>
                  <p>Course: {course}</p>
                      </div>
                        );
                        }

                        function App() {
                          const [count, setCount] = useState(0);

                            const increase = () => {
                                setCount(count + 1);
                                  };

                                    const decrease = () => {
                                        setCount(count - 1);
                                          };

                                            return (
                                                <div className="app">
                                                      <h1>React Props, State & Events</h1>

                                                            <Student name="Rahul" course="ReactJS" />
                                                                  <Student name="Amit" course="JavaScript" />
                                                                        <Student name="Priya" course="Python" />

                                                                              <div className="counter">
                                                                                      <h2>Counter: {count}</h2>

                                                                                              <button onClick={increase}>Increase</button>
                                                                                                      <button onClick={decrease}>Decrease</button>
                                                                                                            </div>
                                                                                                                </div>
                                                                                                                  );
                                                                                                                  }

                                                                                                                  export default App;