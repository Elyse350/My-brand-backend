import express, { request } from 'express';
import { EmployeeModel } from '../db/employeeModel';
class employeeController{
 getAllEmployee= async( request: express.Request, response: express.Response)=>{
    try{
const employees = await EmployeeModel.find();
return response.status(200).json({data: employees})
    
    }catch(error) {
return response.sendStatus(400);
    }
 }
 getEmployee = async( request: express.Request, response: express.Response) =>{
    try{
        const {id} = request.params;
        const employee = await EmployeeModel.findById(id);
        return response.status(200).json({data: employee})

    }catch( error){
return response. sendStatus(400);
    }
 }
 CreateEmployee =  async( request: express.Request, response: express.Response)=>{
    try{
        const {name, email,mobile,dob,doj} = request.body;
        const employee = new EmployeeModel({
            name,
            email,
            mobile,
            dob,
            doj

        });
    await employee.save();
        return response.status(200).json({messenge: "Employee created", data:employee})

    }catch( error){
return response. sendStatus(400);
    }
 }
 updateEmployee =  async( request: express.Request, response: express.Response)=>{
    try{
        const {id} = request.params;
        const {name, email,mobile,dob,doj} = request.body;

        const employee = await EmployeeModel.findById(id);
        if (employee){
            employee.name = name;
            employee.email = email;
            employee.mobile = mobile;
            employee.dob = dob;
            employee.doj = doj;
            await employee.save();
        return response.status(200).json({messenge: "Employee updated", data: employee})
        }
        
        return response.sendStatus(400);
    }catch( error){
return response.sendStatus(400);
    }
 }
 deleteEmployee = async( request: express.Request, response: express.Response)=>{
    try{
        const {id} = request.params;
        await EmployeeModel.findByIdAndDelete({id: id});
        return response.status(200).json({data: "Employee deleted"})

    }catch( error){
return response. sendStatus(400);
    }
 }
}
export default new employeeController();