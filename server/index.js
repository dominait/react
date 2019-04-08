const express = require('express')
const cors = require('cors')
const boxrec = require('boxrec').default;
let login = false;
 
boxrec.login('Stingre', 'BUUDEL3Y2Y73')
    .then(() => {
        console.log('success');
    }).then(()=> {
        console.log('get data requests')
        boxrec.getPersonById(80).then(boxer=>{
            console.log(boxer.name)
        })
    })
    .catch(error => {console.log(error) });
    
console.log(boxrec)


 
  


const app = express()
const port = 8000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))