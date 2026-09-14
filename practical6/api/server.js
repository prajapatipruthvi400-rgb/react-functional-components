const express = require("express");

const app = express();
const PORT = 3002;

app.use(express.json());

let students = [
  {
      id: 1,
          name: "Rahul",
              email: "rahul@gmail.com",
                  course: "ReactJS"
                    },
                      {
                          id: 2,
                              name: "Amit",
                                  email: "amit@gmail.com",
                                      course: "JavaScript"
                                        }
                                        ];

                                        // GET - Get all students
                                        app.get("/api/students", (req, res) => {
                                          res.json(students);
                                          });

                                          // GET - Get student by ID
                                          app.get("/api/students/:id", (req, res) => {
                                            const student = students.find(
                                                (s) => s.id === Number(req.params.id)
                                                  );

                                                    if (!student) {
                                                        return res.status(404).json({ message: "Student not found" });
                                                          }

                                                            res.json(student);
                                                            });

                                                            // POST - Add new student
                                                            app.post("/api/students", (req, res) => {
                                                              const { name, email, course } = req.body;

                                                                if (!name || !email || !course) {
                                                                    return res.status(400).json({
                                                                          message: "Name, email and course are required"
                                                                              });
                                                                                }

                                                                                  const newStudent = {
                                                                                      id: students.length + 1,
                                                                                          name,
                                                                                              email,
                                                                                                  course
                                                                                                    };

                                                                                                      students.push(newStudent);

                                                                                                        res.status(201).json(newStudent);
                                                                                                        });

                                                                                                        // PUT - Update student
                                                                                                        app.put("/api/students/:id", (req, res) => {
                                                                                                          const student = students.find(
                                                                                                              (s) => s.id === Number(req.params.id)
                                                                                                                );

                                                                                                                  if (!student) {
                                                                                                                      return res.status(404).json({ message: "Student not found" });
                                                                                                                        }

                                                                                                                          const { name, email, course } = req.body;

                                                                                                                            student.name = name || student.name;
                                                                                                                              student.email = email || student.email;
                                                                                                                                student.course = course || student.course;

                                                                                                                                  res.json(student);
                                                                                                                                  });

                                                                                                                                  // DELETE - Delete student
                                                                                                                                  app.delete("/api/students/:id", (req, res) => {
                                                                                                                                    const id = Number(req.params.id);

                                                                                                                                      const index = students.findIndex((s) => s.id === id);

                                                                                                                                        if (index === -1) {
                                                                                                                                            return res.status(404).json({ message: "Student not found" });
                                                                                                                                              }

                                                                                                                                                const deletedStudent = students.splice(index, 1);

                                                                                                                                                  res.json({
                                                                                                                                                      message: "Student deleted successfully",
                                                                                                                                                          student: deletedStudent[0]
                                                                                                                                                            });
                                                                                                                                                            });

                                                                                                                                                            app.listen(PORT, () => {
                                                                                                                                                              console.log(`REST API server running on http://localhost:${PORT}`);
                                                                                                                                                              });