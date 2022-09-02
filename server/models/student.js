import mongoose from 'mongoose';

//create MongoDB Schema + add data types
const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,

    section: {
        type: String,
        default: 'A' //default value for grade
    },
    subjects: [String] 
});

//create model
const student = mongoose.model('students',
                            studentSchema);

//export model

export default student;