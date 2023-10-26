//Dependencia commonjs
const express = require('express')
const dotenv = require ('dotenv')
const colors = require ('colors')
//dependencias de rutas
const bootcampRoutes = require('./routes/bootcampRoutes')

//dependencia para conxion
const conectDB = require('./config/db')

//estableer archivo .env del proyecto

dotenv.config({
        path: './config/.env'
    })

conectDB()
    
//crear el objeto app
const app = express()

//express para recibir datos json
app.use(express.json())

//vincular las rutas de bootcamps
app.use('/api/v1/devcamp/bootcamps' , bootcampRoutes)

//primera prueba de url del servidor
app.get('/prueba', 
                function(request, response){
                 response.send("Holaaaaaaaaaa");
})

//uris de bootcamps


//evidencia: uris de courses
//traer todos los campos courses
app.get('/api/v1/devcamp/courses',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : "mostrar todos los courses"   
                        })
        })

//traer todos los campos courses por id
app.get('/api/v1/devcamp/courses/:id',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : `seleccionado con courses con id ${request.params.id}`   
                        })
        })

//crear todos los campos de courses
app.post('/api/v1/devcamp/courses',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : "crear course"   
                        })
        })

//actualizar courses por id 
app.put('/api/v1/devcamp/courses/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `actualizando course con id ${request.params.id}`    
                        })
        })

//eliminar courses por id 
app.delete('/api/v1/devcamp/courses/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `eliminando courses con id ${request.params.id}`    
                        })
        })

//evidencia: uris para reviews
//traer todos los campos reviews
app.get('/api/v1/devcamp/reviews',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : "mostrar todos los reviews"   
                        })
        })

//traer todos los campos reviews por id
app.get('/api/v1/devcamp/reviews/:id',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : `seleccionado con review con id ${request.params.id}`   
                        })
        })

//crear todos los campos de reviews
app.post('/api/v1/devcamp/reviews',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : "crear review"   
                        })
        })

//actualizar reviews por id 
app.put('/api/v1/devcamp/reviews/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `actualizando review con id ${request.params.id}`    
                        })
        })

//eliminar reviews por id 
app.delete('/api/v1/devcamp/reviews/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `eliminando review con id ${request.params.id}`    
                        })
        })

//evidencia: uris para users
//traer todos los campos users
app.get('/api/v1/devcamp/users',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : "mostrar todos los users"   
                        })
        })

//traer todos los campos users por id
app.get('/api/v1/devcamp/users/:id',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : `seleccionado con user con id ${request.params.id}`   
                        })
        })

//crear todos los campos de users
app.post('/api/v1/devcamp/users',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : "crear user"   
                        })
        })

//actualizar users por id 
app.put('/api/v1/devcamp/users/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `actualizando users con id ${request.params.id}`    
                        })
        })

//eliminar users por id 
app.delete('/api/v1/devcamp/users/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `eliminando users con id ${request.params.id}`    
                        })
        })


//establcer  servidor
const PUERTO= process.env.EXPRESS_PORT
app.listen(PUERTO,
        console.log(`Servidor escuchand en el puerto: ${PUERTO}`.bgBlue.red))