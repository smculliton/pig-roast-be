const { google } = require('googleapis')

const appendRow = async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: `${process.env.GOOGLE_APPLICATION_CREDENTIALS}`,
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ]
  })

  const sheets = google.sheets({ version: 'v4', auth: auth })

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: '1K-ALlp-dqYRLd2VdG_nS4rEc6dmFWuMAuX_KUYStb3k',
      range: 'RSVPS!A1:D1',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[req.body.firstName, req.body.lastName, req.body.sideDish, req.body.numberPeople]]
      }
    })

    res.status(200).json({ message: 'Row appended to Google Sheet' })
  } catch (error) {
    console.error('Google Sheets API error:', error);
    res.status(500).json({ error: 'Failed to append row to Google Sheet' })
  }
}

module.exports = {
  appendRow
}