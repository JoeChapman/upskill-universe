import express from 'express'
const app = express()

export function filterNames(names: string[]) {
  return names.filter(name => name.length > 3)
}

app.get('/greet', (req, res) => {
  if (req.query && req.query.name) {
    res.json({
      message: `Hello, ${req.query.name}`, 
      long_names: filterNames(['Sam', 'John', 'Max', 'Emily'])
    })
  } else {
    res.status(400).json({
      message: 'Name query parameter is required.'
    })
  }
})

const PORT = 8001

app.listen(PORT)

export default app