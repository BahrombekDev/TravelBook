const Travel = require('../models/traveModels')

//method get
//descr get all travels
const getAllTravels = async (req,res) =>{
    try {
        const travels = await Travel.find()

        res.status(200).json({
            message:'success',
            travels:travels.reverse()
        })
    } catch (err) {
        res.send(err)
    }
}

//methot get
//descr get one travel by id
const getTravelById = async (req,res) =>{
    try {
        const travel = await Travel.findById(req.params.id)

        if(!travel){
            return res.status(404).json({
                message:'Not found'
            })
        }

        return res.status(200).json({
            message:'success',
            travel
        })
    } catch (err) {
        res.send(err)
    }
}

//methot post
//descr add new travel book
const addTravelBook = async (req,res) =>{
    try {
        const {
            title,
            image,
            descr
        } = req.body
        const newTravel = await Travel.create({
            title,
            image,
            descr
        })
        return res.status(201).json({
            message:'success',
            newTravel
        })
    } catch (err) {
        res.send(err)
    }
}

//methot put
//descr update travel book
const updateTravelBook = async (req,res) =>{
    try {
        const {
            title,
            image,
            descr
        } = req.body
        const updateTravel = await Travel.findByIdAndUpdate(req.params.id,{
            title,
            image,
            descr
        })
        return res.status(200).json({
            message:'success',
            updateTravel
        })
    } catch (err) {
        res.send(err)
    }
}

//methot delete
//descr del travel book
const removeTravelBook = async (req,res) =>{
    try {
        await Travel.findByIdAndRemove(req.params.id)
        return res.status(200).json({
            message:'Delete'
        })
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    getAllTravels,
    getTravelById,
    addTravelBook,
    updateTravelBook,
    removeTravelBook
}