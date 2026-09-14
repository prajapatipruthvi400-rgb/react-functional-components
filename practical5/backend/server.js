const express = require("express");

const app = express();
const PORT = 3001;
app.get("/", (req, res) => {
      res.send("Student Management API is running");
      });

app.use(express.json());
 


// Sample data
let students = [
  { id: 1, name: "Rahul", course: "ReactJS" },
    { id: 2, name: "Amit", course: "JavaScript" }
    ];

    // GET - Read all students
    app.get("/students", (req, res) => {
      res.json(students);
      });

      // GET - Read single student
      app.get("/students/:id", (req, res) => {
        const student = students.find(s => s.id === Number(req.params.id));

          if (!student) {
              return res.status(404).json({ message: "Student not found" });
                }

                  res.json(student);
                  });

                  // POST - Create student
                  app.post("/students", (req, res) => {
                    const newStudent = {
                        id: students.length + 1,
                            name: req.body.name,
                                course: req.body.course
                                  };

                                    students.push(newStudent);

                                      res.status(201).json(newStudent);
                                      });

                                      // PUT - Update student
                                      app.put("/students/:id", (req, res) => {
                                        const student = students.find(s => s.id === Number(req.params.id));

                                          if (!student) {
                                              return res.status(404).json({ message: "Student not found" });
                                                }

                                                  student.name = req.body.name;
                                                    student.course = req.body.course;

                                                      res.json(student);
                                                      });

                                                      // DELETE - Delete student
                                                      app.delete("/students/:id", (req, res) => {
                                                        const id = Number(req.params.id);
                                                          const index = students.findIndex(s => s.id === id);

                                                            if (index === -1) {
                                                                return res.status(404).json({ message: "Student not found" });
                                                                  }

                                                                    const deletedStudent = students.splice(index, 1);

                                                                      res.json({
                                                                          message: "Student deleted successfully",
                                                                              student: deletedStudent[0]
                                                                                });
                                                                                });

                                                                                // Start server
                                                                                app.listen(PORT, () => {
                                                                                  console.log(`Server running on http://localhost:${PORT}`);
                                                                                  });