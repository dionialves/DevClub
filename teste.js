const students = [
    { name: 'Rodolfo', testGrade: 5},
    { name: 'Maria', testGrade: 6},
    { name: 'Dioni', testGrade: 10},
    { name: 'Carlos', testGrade: 8},
    { name: 'Pedro', testGrade: 3},
    { name: 'Bianca', testGrade: 2},
    { name: 'Heitor', testGrade: 7},
    { name: 'Rozana', testGrade: 8},
    { name: 'Tiago', testGrade: 9.5},
    { name: 'Bruno', testGrade: 8.3}
]

const approvedStudents = students.map((student) => {
    return {
        name: student.name,
        aproved: student.testGrade >= 7 ? true : false
    }
})

console.log(approvedStudents)