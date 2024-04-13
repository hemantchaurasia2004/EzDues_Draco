import express from 'express';
import pool from './database.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/students', (req, res) => {
    pool.query('SELECT * FROM Student', (error, results) => {
        if (error) {
            console.error('Error fetching students:', error);
            res.status(500).send('Error fetching students');
        } else {
            res.json(results);
        }
    });
});

app.post('/students', (req, res) => {
    const { Name, RollNo, DepartmentID } = req.body;
    if (!Name || !RollNo || !DepartmentID) {
        res.status(400).send('Name, RollNo, and DepartmentID are required');
        return;
    }
    pool.query('INSERT INTO Student (Name, RollNo, DepartmentID) VALUES (?, ?, ?)', [Name, RollNo, DepartmentID], (error, results) => {
        if (error) {
            console.error('Error adding student:', error);
            res.status(500).send('Error adding student');
        } else {
            res.send('Student added successfully');
        }
    });
});

app.get('/dues/:studentId', (req, res) => {
    const studentId = req.params.studentId;
    pool.query('SELECT * FROM Dues WHERE StudentID = ?', [studentId], (error, results) => {
        if (error) {
            console.error('Error fetching dues:', error);
            res.status(500).send('Error fetching dues');
        } else {
            res.json(results);
        }
    });
});

app.put('/dues/:studentId', (req, res) => {
    const studentId = req.params.studentId;
    const { status } = req.body;
    if (!status || (status !== 'Paid' && status !== 'Unpaid')) {
        res.status(400).send('Valid status (Paid or Unpaid) is required');
        return;
    }
    pool.query('UPDATE Dues SET Status = ? WHERE StudentID = ?', [status, studentId], (error, results) => {
        if (error) {
            console.error('Error updating due:', error);
            res.status(500).send('Error updating due');
        } else {
            res.send('Due updated successfully');
        }
    });
});

app.post('/dues', (req, res) => {
    const { studentId, amount, description, status } = req.body;
    if (!studentId || !amount || !description || !status || (status !== 'Paid' && status !== 'Unpaid')) {
        res.status(400).send('Valid studentId, amount, description, and status (Paid or Unpaid) are required');
        return;
    }
    pool.query('INSERT INTO Dues (StudentID, Amount, Description, Status) VALUES (?, ?, ?, ?)', [studentId, amount, description, status], (error, results) => {
        if (error) {
            console.error('Error adding due:', error);
            res.status(500).send('Error adding due');
        } else {
            res.send('Due added successfully');
        }
    });
});

app.delete('/dues/:studentId', (req, res) => {
    const studentId = req.params.studentId;
    pool.query('DELETE FROM Dues WHERE StudentID = ?', studentId, (error, results) => {
        if (error) {
            console.error('Error deleting due:', error);
            res.status(500).send('Error deleting due');
        } else {
            res.send('Due deleted successfully');
        }
    });
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
