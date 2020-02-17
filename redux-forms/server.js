const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.disable('x-powered-by')

let list = [{
  id: 1,
  name: 'Teste 1',
  age: 44
}, {
  id: 2,
  name: 'Teste 2',
  age: 22
}]

app.get('/', (req, res) => {
  return res.status(200).json({
    data: list
  })
})

app.post('/', (req, res) => {
  req.body.data.id = list.length + 1
  list.push(req.body.data)
  return res.status(200).json({
    data: req.body.data
  })
})

app.listen(9002, () => console.log('Started'))
