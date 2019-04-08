/* 
Note required but starter for any node.js
required for project.
*/
const express = require('express')
const cors = require('cors')
 
const app = express()
const port = 7000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))