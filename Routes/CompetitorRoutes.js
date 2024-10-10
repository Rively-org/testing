const express = require('express')
const router = express.Router()

const { createCompetitor } = require('../Controllers/CompetitorController')

router.post('/',createCompetitor)

module.exports = router