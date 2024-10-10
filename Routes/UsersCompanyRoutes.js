const express = require('express')
const router = express.Router()

const { createUsersCompany } = require('../Controllers/UsersCompanyController')

router.post('/',createUsersCompany)

module.exports = router