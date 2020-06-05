import express from 'express'

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários')

  // response.send('Hello World!')

  // JSON

  response.json([
    'Rodrigo',
    'Juliana',
    'Tainá',
    'Thales',
    'Maria'
  ])
})

app.listen(3333)
