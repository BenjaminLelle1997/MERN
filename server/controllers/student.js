import StudentData from '../models/student.js';

export const getStudent = async (req, res) => {
    try {
        const allStudents = await StudentData.find();
        res.status(200).json(allStudents)
        //if everything is all right (resources),
        //server send back the response in JSON to me

    } catch (error) {
        res.status(404).json({message: error.message})
        // the resource (req) is not existed,found
    }
    
}

export const createStudent = async (req, res) => {
    const student = req.body;

    const newStudent = new StudentData (student);

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
        // req is success and resources is created
    } catch (error) {
        res.status(409).json({message: error.message})
        // the resource is not reached, 
        // because there will be a conflict with another process
    }
}

export const deleteStudent = async (req, res) => {
    
    const id = req.params.id;


    try {
        await StudentData.findByIdAndRemove(id).exec();  
        res.send('Successfully Deleted!')
    } catch (error) {
        console.log(error);
    }
}