const router = require('express').Router()
const {ctrlStudents} = require('../../controllers')

router.get('/students', ctrlStudents.getAllStudents)

router.get('/students/:id/tests', ctrlStudents.getStudentTests)

module.exports = router
