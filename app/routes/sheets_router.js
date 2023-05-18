const { Router } = require('express')
const controller = require('../controllers/sheets_controller')

const router = Router()

router.post('/', controller.appendRow)

module.exports = router