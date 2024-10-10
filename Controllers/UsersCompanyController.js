const UsersCompany = require('../Models/UsersCompanyModel')
const { StatusCodes } = require('http-status-codes')

const createUsersCompany = async(req,res) =>{
    try {
        const company = await UsersCompany.create(req.body)
        res.status(StatusCodes.OK).json({company})
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error creating Company'})
    }
}

module.exports = {
    createUsersCompany
}