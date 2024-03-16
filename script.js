// Define the enrollment data
const enrollmentData = {
  enrollmentData: [
    { student: "Alice", course: "Math" },
    { student: "Bob", course: "Math" },
    { student: "Charlie", course: "English" },
    { student: "David", course: "Science" },
    { student: "Eve", course: "Math" },
    { student: "Frank", course: "English" },
  ],
};

// Function to calculate total enrollment asynchronously
async function calculateEnrollment() {
  try {
    // Group enrollment data by course
    const groupedEnrollment = enrollmentData.enrollmentData.reduce((acc, { course }) => {
      acc[course] = acc[course] ? acc[course] + 1 : 1;
      return acc;
    }, {});

    // Log the total enrollment for each course
    for (const course in groupedEnrollment) {
      console.log(`Course: ${course}, Total Enrollment: ${groupedEnrollment[course]}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the function to calculate enrollment
calculateEnrollment();
