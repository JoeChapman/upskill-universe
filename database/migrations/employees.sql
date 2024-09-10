CREATE TABLE Employees (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES Departments(id)
);