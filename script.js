// Function to show the selected section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Function to register the student
function registerStudent(event) {
    event.preventDefault();

    // Get form data
    const studentName = document.getElementById('studentName').value;
    const studentEmail = document.getElementById('studentEmail').value;

    // Store in localStorage
    localStorage.setItem('studentName', studentName);
    localStorage.setItem('studentEmail', studentEmail);

    alert('Student Registered!');
}

// Function to enroll the student in a course
function enrollInCourse(event) {
    event.preventDefault();

    // Get course data
    const courseId = document.getElementById('courseId').value;

    // Store in localStorage
    localStorage.setItem('courseId', courseId);
    localStorage.setItem('enrollmentDate', new Date().toLocaleDateString());

    alert('Student Enrolled!');
}

// Function to mark attendance for a student
function markAttendance(event) {
    event.preventDefault();

    // Get attendance data
    const studentId = document.getElementById('studentId').value;
    const attendanceStatus = document.querySelector('input[name="attendance"]:checked').value;

    // Store in localStorage
    localStorage.setItem(`attendanceStatus_${studentId}`, attendanceStatus);
    localStorage.setItem(`attendanceDate_${studentId}`, new Date().toLocaleDateString());

    alert('Attendance Recorded!');
}

// Function to mark fee payment
function payFees(event) {
    event.preventDefault();

    // Set a flag in localStorage
    localStorage.setItem('feesPaid', 'true');

    alert('Fees Paid!');
}

// Function to show timetable (this can be just a placeholder)
function viewTimetable(event) {
    event.preventDefault();

    // Set a flag in localStorage to indicate that the timetable was viewed
    localStorage.setItem('timetableViewed', 'true');

    alert('Viewing Timetable!');
}

// Function to generate a report (placeholder action)
function generateReport(event) {
    event.preventDefault();

    // Retrieve stored data from localStorage
    const studentName = localStorage.getItem('studentName');
    const studentEmail = localStorage.getItem('studentEmail');
    const courseId = localStorage.getItem('courseId');
    const enrollmentDate = localStorage.getItem('enrollmentDate');
    const feesPaid = localStorage.getItem('feesPaid');
    const timetableViewed = localStorage.getItem('timetableViewed');
    const attendanceStatus = localStorage.getItem('attendanceStatus_1');  // Example for student with ID '1'

    // Create a report string
    let report = `Report for ${studentName} (${studentEmail})\n`;
    report += `Course ID: ${courseId}, Enrollment Date: ${enrollmentDate}\n`;
    report += `Fees Paid: ${feesPaid === 'true' ? 'Yes' : 'No'}\n`;
    report += `Timetable Viewed: ${timetableViewed === 'true' ? 'Yes' : 'No'}\n`;
    report += `Attendance Status: ${attendanceStatus ? attendanceStatus : 'Not recorded'}\n`;

    // Display the report in an alert or log
    alert(report);
    console.log(report); // For debugging, output it to the console as well
}

// Function to send a message
function sendMessage(event) {
    event.preventDefault();

    // Get message content
    const messageContent = document.getElementById('messageContent').value;

    // Store message content in localStorage
    localStorage.setItem('lastMessage', messageContent);

    alert('Message Sent!');
}

// Initialize the page with the first section visible
document.addEventListener('DOMContentLoaded', () => {
    showSection('registerSection'); // Default section to show
});
