const { google } = require('googleapis')
const sheets = google.sheets({ version: 'v4', auth: process.env.GOOGLE_API_KEY })

const appendRow = (req, res) => {
  console.log(process.env.GOOGLE_API_KEY)
}

module.exports = {
  appendRow
}