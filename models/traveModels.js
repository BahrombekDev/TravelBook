const {Schema,model} = require('mongoose')

const travelModel = new Schema ({
    title: {
        type:String,
        required:true,
        nimLength:5
    },
    image: {
        type:String,
        required:true
    },
    descr:{
        type:String,
        requred:true
    }


})

module.exports = model('Travel',travelModel)