const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()
const port = 3002

app.use(express.json(), cors())

const sheetsRouter = require('../app/routes/sheets_router')
app.use('/api/v1/sheets', sheetsRouter)

app.listen(port, () => console.log(`app listening on port ${port}`))