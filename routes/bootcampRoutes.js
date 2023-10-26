const express = require ('express')
const bootcampModel = require('../models/BootcampsModels')
const router = express.Router()

//uris  de bootcamps
//traer todos los campos bootcamps
router.get('/',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : "mostrar todos los botcamps"   
                        })
        })

//traer todos los campos bootcamps por id
router.get('/:id',
        (request,response)=> {
                response
                        .status(200)
                        .json({
                             "success" : true,
                             "msg" : `seleccionado con bootcamp con id ${request.params.id}`   
                        })
        })

//crear todos loscampos de bootcamps
router.post('/',
             (request,response)=> {
                //crear el nuevo bootcamp
                //const bootcamp = bootcampModel.create(request.body)

                response
                        .status(201)
                        .json({
                             "success" : true,
                             "data" : request.body   
                        })
        })

//actualizar bootcamp por id 
router.put('/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `actualizando bootcamp con id ${request.params.id}`    
                        })
        })

//eliminar bootcamp por id 
router.delete('/:id',
        (request,response)=> {
                response
                        .status(201)
                        .json({
                             "success" : true,
                             "msg" : `eliminando bootcamp con id ${request.params.id}`    
                        })
        })

module.exports = router