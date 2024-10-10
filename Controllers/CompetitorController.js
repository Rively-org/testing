const Competitor = require('../Models/CompetitorModel')
const { StatusCodes } = require('http-status-codes')

const createCompetitor = async(req,res) =>{
    try {
        const competitor = await Competitor.create(req.body)
        res.status(StatusCodes.OK).json({competitor})
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error creating competitor'})
    }
}

module.exports = {
    createCompetitor
}