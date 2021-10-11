const express = require('express')

const {studentsRoutes} = require('./routes')

const PORT = 5000

const app = express()

app.use(express.json())

app.use('/', studentsRoutes)

app.listen(PORT, () => {
    console.log('🚀 Server ready at: http://localhost:5000')
})



