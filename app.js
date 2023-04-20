const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("Got a GET request at /")
})

app.post('/', (req, res) => {
    res.send('Got a POST request at /')
    console.log('Got a POST Request at /')
})

app.put('/', (req, res) => {
    res.send('Got a PUT request at /')
    console.log('Got a PUT request at /')
})

app.delete('/', (req, res) => {
    res.send('Got a DELETE request at /')
    console.log('Got a DELETE request at /')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})