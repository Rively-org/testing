const mongoose = require('mongoose')

const CompetitorSchema = mongoose.Schema({
    company:{
       type:mongoose.Types.ObjectId,
       required:true
    },
    competitors:{
        type:[String],
        required:true
    },
    interests:{
        type:[String],
        required:true,
        enum:["Pricing","Hiring","Layoffs"] 
    }
})

module.exports = mongoose.model('Competitor',CompetitorSchema)