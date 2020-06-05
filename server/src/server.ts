import express, { response } from 'express'

const app = express();

app.use(express.json())

const users = [
  'Rodrigo', // 0
  'Juliana', // 1
  'Tainá', // 2
  'Thales', // 3
  'Maria' // 4
]

app.get('/users', (request, response) => {
  const search = String(request.query.search).toLowerCase()
  
  const filteredUsers = search ? users.filter(user => user.toLowerCase().includes(search)) : users
  
  return response.json(filteredUsers)
})

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id)

  const user = users[id]

  return response.json(user)
})

app.post('/users', (request, response) => {
  const data = request.body

  const user = {
    name: data.name,
    email: data.email
  }
  
  return response.json(user)
})

app.listen(3333)
