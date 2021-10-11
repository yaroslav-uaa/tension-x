const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

const studentData = [
    {
        name: 'Nicole Kidman',
        class: '1D',
        avScore: 76,
        avSpeed: 'Below Expected',
        parents: 'Antony Kidman, Jessica Alba-Gabriella',
        tests: {
            create: [
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '01:00:00',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 10',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: true
                },
            ],
        },
    },
    {
        name: 'Floyd Miles',
        class: '1D',
        avScore: 96,
        avSpeed: 'Above Expected',
        parents: 'Antony Kidman, Janelle Ann Kidman',
        tests: {
            create: [
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 10',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: true
                },
            ],
        },
    },
    {
        name: 'Kathryn Murphy',
        class: '1D',
        avScore: 16,
        avSpeed: 'Below Expected',
        parents: 'Antony Kidman, Jessica Alba-Gabriella',
        tests: {
            create: [
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 10',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: true
                },


            ],
        },
    },
    {
        name: 'Arlene McCoy',
        class: '1D',
        avScore: 25,
        avSpeed: 'Below Expected',
        parents: 'Antony Kidman, Jessica Alba-Gabriella',
        tests: {
            create: [
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 10',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: true
                },
            ],
        },
    },
    {
        name: 'Theresa Webb',
        class: '1D',
        avScore: 88,
        avSpeed: 'Above Expected',
        parents: 'Antony Kidman, Jessica Alba-Gabriella',
        tests: {
            create: [
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 10',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: true
                },


            ],
        },
    },
    {
        name: 'Dianne Russell',
        class: '1D',
        avScore: 74,
        avSpeed: 'Above Expected',
        parents: 'Antony Kidman, Jessica Alba-Gabriella',
        tests: {
            create: [
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 10',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: true
                },


            ],
        },
    }, {
        name: 'Annette Black',
        class: '1D',
        avScore: 91,
        avSpeed: 'As Expected',
        parents: 'Antony Kidman, Jessica Alba-Gabriella',
        tests: {
            create: [
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 10',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: true
                },
            ],
        },
    }, {
        name: 'Courtney Henry',
        class: '1D',
        avScore: 96,
        avSpeed: 'Below Expected',
        parents: 'Antony Kidman, Jessica Alba-Gabriella',
        tests: {
            create: [
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 10',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 9,
                    speed: '1h 00m 41s',
                    totalQuations: 10,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: false
                },
                {
                    label: 'Finding Averages 1 to 400',
                    score: 350,
                    speed: '1h 12m 41s',
                    totalQuations: 400,
                    expectedSpeed: '1h 00m 00s',
                    concept: 'Multiplication',
                    date: 'APR 30 2021',
                    absent: true
                },
            ],
        },
    }
]

async function main() {
    console.log(`Start seeding ...`)
    for (const u of studentData) {
        const student = await prisma.student.create({
            data: u,
        })
        console.log(`Created user with id: ${student.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
