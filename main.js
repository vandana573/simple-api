const express=require('express');
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.json());
const studentsList=[
    {
        id:1,
        name:'abc',
        age:21,
        dept:'IT'

    },
    {
        id:2,
        name:'def',
        age:22,
        dept:'ECE'

    },
    
    {
        id:3,
        name:'xyz',
        age:23,
        dept:'CSE'

    },
    {
        id:4,
        name:'pqr',
        age:20,
        dept:'EEE'

    }       
];
app.get('/api/index',(req,resp)=>{
    resp.json(studentsList);
});
app.post('/api/create',(req,resp)=>{
    console.log(req);
    const newStudent={
    name:req.body.name,
    age:req.body.age,
    dept:req.body.dept,
    id:studentsList.length+1
    };
    studentsList.push(newStudent);
    resp.status(201);
    resp.json(newStudent.id);
});
app.delete('/api/delete/:id',(req,resp)=>{
    console.log(req);
    const idToBeDeleted=parseInt(req.params.id);
    const studentToBeDeleted=studentsList.findIndex(student => student.id===idToBeDeleted);
    studentsList.splice(studentToBeDeleted,1);
    resp.json(idToBeDeleted);

});
app.delete('/api/delete/:id',(req,resp)=>{
    //console.log(req);
    const idToBeFetched=parseInt(req.params.id);
    const studentToBeDeleted=studentsList.findIndex(student => student.id===idToBeFetched);
    resp.json(idToBeFetched);

});
app.listen(5000);
