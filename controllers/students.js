const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

const getAllStudents = async (req, res) => {
    try {
        const students = await prisma.student.findMany()
        res.json(students)
    } catch (e) {
        res.status(500).send(e)
    }
}

const getStudentTests = async (req, res) => {
    try {
        const {id} = req.params
        const tests = await prisma.test.findMany({
            where: {
                studentId: Number(id),
            },
        })
        res.json(tests)
    } catch (e) {
        res.status(500).send(e)
    }
}

module.exports = {
    getAllStudents,
    getStudentTests
}
