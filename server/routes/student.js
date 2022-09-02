import express from 'express';
import { getStudent, createStudent, deleteStudent } from '../controllers/student.js';
import student from '../models/student.js';

const router = express.Router();

// path + callback (controller)
router.get('/', getStudent);  

router.post('/', createStudent);  

router.delete('/:id',deleteStudent);

export default router;