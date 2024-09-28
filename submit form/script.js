function update() {
    // Retrieve input values
    let studentName = document.getElementById('studentname').value;
    let dob = document.getElementById('dob').value;
    let studentClass = document.getElementById('class').value;
    let roll = document.getElementById('roll').value;
    let contact = document.getElementById('contact').value;

    // Update display elements
    document.getElementById('displayStudentName').innerText = studentName;
    document.getElementById('displayDob').innerText = dob;
    document.getElementById('displayClass').innerText = studentClass;
    document.getElementById('displayRoll').innerText = roll;
    document.getElementById('displayContact').innerText = contact;

    console.log(`Student Name: ${studentName}`);
    console.log(`Date of Birth: ${dob}`);
    console.log(`Class: ${studentClass}`);
    console.log(`Roll No: ${roll}`);
    console.log(`Contact No: ${contact}`);
}
/* <form id="studentForm">
                <ul>
                    <li>
                        <label style="font-size:20px; font-weight: bolder;" for="studentname">Student Name</label>
                        <input class="ok" id="studentname" type="text">
                    // </li> */