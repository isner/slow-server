const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const delay = Number(req.query.delay || 0)

  if (isNaN(delay) || delay < 0 || delay > 60000) {
    return res.status(400).send(
      `query parameter 'delay' must be a number between 0 and 60000`
    )
  }
  
  setTimeout(() => {
    return res.status(200).send(
      `slow-server responded after a ${delay}ms delay`
    )
  }, delay)
})

app.listen(port, () => console.log(`slow-server listening on port ${port}`))