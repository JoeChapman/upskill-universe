-- Select all employees with a salary greater than 50,000.
SELECT *
FROM Employees
WHERE salary > 50000;

-- Retrieve all employees from the "Sales" department.
SELECT e.*
FROM Employees e
JOIN Departments d ON e.department_id = d.id
WHERE d.department_name = 'Sales';

-- Get the total salary being paid to employees in the "Engineering" department.
SELECT SUM(e.salary) AS total_salary
FROM Employees e
JOIN Departments d ON e.department_id = d.id
WHERE d.department_name = 'Engineering';

-- Join the Employees and Departments tables and display a result showing the
-- name of the employee, their department_name, and their salary.
SELECT e.name, d.department_name, e.salary
FROM Employees e
JOIN Departments d ON e.department_id = d.id;

-- Calculate the average salary of employees per department.
SELECT d.department_name, AVG(e.salary) AS average_salary
FROM Employees e
JOIN Departments d ON e.department_id = d.id
GROUP BY d.department_name;
