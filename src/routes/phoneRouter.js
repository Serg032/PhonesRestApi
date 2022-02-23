const router = require('express').Router()
const phoneService = require('./../services/phoneService')

router.get('/', async (req,res,next) => {
    const phones = await phoneService.readAll()
    res.json(phones)
})

router.get('/:id', async (req,res,next) => {
    const {id} = req.params
    const phone = await phoneService.read(id)
    res.json(phone)
})

router.post('/', async (req,res,next) => {
    const document = req.body
    await phoneService.create(document)
    res.status(201).json({message: 'Phone created'})
})

router.put('/:id', async (req,res,next) => {
    const {id} = req.params
    const document = req.body
    const phone = await phoneService.update(id, document)
    res.json(phone)
})

router.patch('/:id', async (req,res,next) => {
    const {id} = req.params
    const document = req.body
    const phone = await phoneService.update(id, document)
    res.json(phone)
})

router.delete('/:id', async (req,res,next) => {
    const {id} = req.params
    await phoneService.remove(id)
    res.json({message: 'Phone Deleted'})
})
 
module.exports = router