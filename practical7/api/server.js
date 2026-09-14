require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3003;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Employee API is running");
})

// MongoDB Atlas connection
mongoose
  .connect(process.env.MONGODB_URI)
   .then(() => {
      console.log("MongoDB Atlas connected");

      app.listen(PORT, () => {
        console.log(`Employee API running on http://localhost:${PORT}`);
                      });
                        })
      .catch((err) => {
        console.log("MongoDB connection error:", err.message);
                                });

     // Employee Schema
      const employeeSchema = new mongoose.Schema({
        name: {
            type: String,
                required: true
                  },
                    email: {
                        type: String,
                            required: true
                              },
                                department: {
                                    type: String,
                                        required: true
                                          },
                                            salary: {
                                                type: Number,
                                                    required: true
                                                      }
                                                      });

                                                      const Employee = mongoose.model("Employee", employeeSchema);

                                                      // GET - All employees
                                                      app.get("/api/employees", async (req, res) => {
                                                        try {
                                                            const employees = await Employee.find();
                                                                res.json(employees);
                                                                  } catch (error) {
                                                                      res.status(500).json({ message: error.message });
                                                                        }
                                                                        });

                                                                        // POST - Add employee
                                                                        app.post("/api/employees", async (req, res) => {
                                                                          try {
                                                                              const employee = new Employee(req.body);
                                                                                  const savedEmployee = await employee.save();
                                                                                      res.status(201).json(savedEmployee);
                                                                                        } catch (error) {
                                                                                            res.status(400).json({ message: error.message });
                                                                                              }
                                                                                              });

                                                                                              // PUT - Update employee
                                                                                              app.put("/api/employees/:id", async (req, res) => {
                                                                                                try {
                                                                                                    const employee = await Employee.findByIdAndUpdate(
                                                                                                          req.params.id,
                                                                                                                req.body,
                                                                                                                      { new: true, runValidators: true }
                                                                                                                          );

                                                                                                                              if (!employee) {
                                                                                                                                    return res.status(404).json({ message: "Employee not found" });
                                                                                                                                        }

                                                                                                                                            res.json(employee);
                                                                                                                                              } catch (error) {
                                                                                                                                                  res.status(400).json({ message: error.message });
                                                                                                                                                    }
                                                                                                                                                    });

                                                                                                                                                    // DELETE - Delete employee
                                                                                                                                                    app.delete("/api/employees/:id", async (req, res) => {
                                                                                                                                                      try {
                                                                                                                                                          const employee = await Employee.findByIdAndDelete(req.params.id);

                                                                                                                                                              if (!employee) {
                                                                                                                                                                    return res.status(404).json({ message: "Employee not found" });
                                                                                                                                                                        }

                                                                                                                                                                            res.json({
                                                                                                                                                                                  message: "Employee deleted successfully",
                                                                                                                                                                                        employee
                                                                                                                                                                                            });
                                                                                                                                                                                              } catch (error) {
                                                                                                                                                                                                  res.status(400).json({ message: error.message });
                                                                                                                                                                                                    }
                                                                                                                                                                                                    });

                                                                                                                                                                                                    // Start server
