const mongoose = require('mongoose')

const UserCompanySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    company_name:{
        type:String,
        required:true
    },
    company_website:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('UserCompany',UserCompanySchema)