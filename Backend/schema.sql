CREATE DATABASE db;
USE db;


CREATE TABLE Student (
    StudentID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255),
    RollNo VARCHAR(50),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID)
);

CREATE TABLE Department (
    DepartmentID INT PRIMARY KEY AUTO_INCREMENT,
    DepartmentName VARCHAR(255)
);

CREATE TABLE Admins (
    AdminID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255),
    Position VARCHAR(100),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID)
);

CREATE TABLE Dues (
    DuesID INT PRIMARY KEY AUTO_INCREMENT,
    StudentID INT,
    Amount DECIMAL(10,2),
    Description TEXT,
    Status ENUM('Paid', 'Unpaid'),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID)
);


-- Inserting into Department Table
INSERT INTO Department (DepartmentName) VALUES
('Computer Science'),
('Electrical Engineering'),
('Mechanical Engineering'),
('Civil Engineering'),
('Mathematics'),
('Physics'),
('Chemistry'),
('Biology'),
('English'),
('History');

-- Inserting into Admins Table
INSERT INTO Admins (Name, Position, DepartmentID) VALUES
('Admin 1', 'Manager', 1),
('Admin 2', 'Coordinator', 2),
('Admin 3', 'Supervisor', 3),
('Admin 4', 'Manager', 4),
('Admin 5', 'Coordinator', 5),
('Admin 6', 'Supervisor', 6),
('Admin 7', 'Manager', 7),
('Admin 8', 'Coordinator', 8),
('Admin 9', 'Supervisor', 9),
('Admin 10', 'Manager', 10);

-- Inserting into Student Table
INSERT INTO Student (Name, RollNo, DepartmentID) VALUES
('Alice Johnson', 'CS001', 1),
('Bob Smith', 'EE001', 2),
('Charlie Brown', 'ME001', 3),
('David Lee', 'CE001', 4),
('Emma Taylor', 'MA001', 5),
('Frank White', 'PH001', 6),
('Grace Adams', 'CH001', 7),
('Henry Davis', 'BI001', 8),
('Isabella Martinez', 'EN001', 9),
('Jack Wilson', 'HI001', 10);

-- Inserting into Dues Table
INSERT INTO Dues (StudentID, Amount, Description, Status) VALUES
(1, 100, 'Tuition Fees', 'Unpaid'),
(2, 150, 'Lab Charges', 'Unpaid'),
(3, 200, 'Library Fines', 'Paid'),
(4, 100, 'Exam Fees', 'Unpaid'),
(5, 120, 'Seminar Charges', 'Unpaid'),
(6, 180, 'Research Fees', 'Paid'),
(7, 90, 'Miscellaneous', 'Unpaid'),
(8, 210, 'Semester Fees', 'Paid'),
(9, 110, 'Sports Fees', 'Unpaid'),
(10, 170, 'Extracurricular Charges', 'Paid');
