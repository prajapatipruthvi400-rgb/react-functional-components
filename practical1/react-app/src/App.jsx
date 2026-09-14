import React from "react";

// Reusable Functional Component
function StudentCard({ name, course }) {
  return (
      <div className="card">
            <h2>{name}</h2>
                  <p>Course: {course}</p>
                      </div>
                        );
                        }

                        // Main Functional Component
                        function App() {
                          return (
                              <div className="container">
                                    <h1>Student Information</h1>

                                          <StudentCard name="Rahul" course="ReactJS" />
                                                <StudentCard name="Amit" course="JavaScript" />
                                                      <StudentCard name="Priya" course="Python" />
                                                          </div>
                                                            );
                                                            }

                                                            export default App;