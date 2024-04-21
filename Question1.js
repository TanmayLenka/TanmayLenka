const students = [
  { name: "Dhishan Debnath", Roll: 1 },
  { name: "Animesh Gupta", Roll: 2 },
  { name: "Tapas Sen", Roll: 3 },
  { name: "Misti Dutta", Roll: 4 },
  { name: "Chini Misra", Roll: 5 }
];

const Details = [
  { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
  { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
  { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
  { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
  { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
];

function generateStudentMarkSheets(students, Details) {
  const markSheets = [];

  students.forEach(student => {
    const studentDetails = Details.find(detail => detail.Roll === student.Roll);
    if (studentDetails) {
      const totalMarks = Object.values(studentDetails.subjects).reduce((acc, curr) => acc + curr, 0);
      const passedStatus = totalMarks >= 200 ? "Pass" : "Fail";
      const markSheet = {
        Name: student.name,
        Roll: student.Roll,
        Subjects: studentDetails.subjects,
        TotalMarks: totalMarks,
        //AverageMarks: averageMarks.toFixed(2)
        Status: passedStatus
      };
      markSheets.push(markSheet);
    }
  });

  return markSheets;
}

// Generate mark sheets
const markSheets = generateStudentMarkSheets(students, Details);

// Output mark sheets
markSheets.forEach(markSheet => {
  console.log("Name:", markSheet.Name);
  console.log("Roll:", markSheet.Roll);
  console.log("Subjects:", markSheet.Subjects);
  console.log("Total Marks:", markSheet.TotalMarks);
  console.log("Status:", markSheet.Status);
  console.log("\n");
})