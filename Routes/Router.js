//import express

const express=require('express')


const userController=require('../Controllers/userController')

const projectController=require('../Controllers/projectController')

const jwtMiddleware=require('../Middlewares/jwtMiddleware')

const multerConfig=require('../Middlewares/multerMiddleware')

//create router object of express to define path
const router=new express.Router()

//using router object to define path

//Register API path -https:localhost:4000/register -frontend
router.post('/register',userController.register)


//Login API path
router.post('/login',userController.login)

//add user project API path:https://localhost:4000/project/add

router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addUserProject)

//get all users projects path - https://localhost:4000/project/all-user-projects

router.get('/project/all-user-projects',jwtMiddleware,projectController.getAllUserProjects)

//get all projects path -  https://localhost:4000/project/all-project

router.get('/project/all-projects',jwtMiddleware,projectController.getAllProjects)

//get home projects path -  https://localhost:4000/project/home-projects

router.get('/project/home-project',projectController.getHomeProject)

//update project-https://localhost:4000/project/update-project/232321

router.put('/project/update-project/:pid',jwtMiddleware,multerConfig.single('projectImage'),projectController.updateProject)

//delete project-https://localhost:4000/project/delete-project/232321

router.delete('/project/delete-project/:pid',jwtMiddleware,projectController.deleteProject)

//export

module.exports=router
