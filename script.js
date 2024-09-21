// function patientData(){
//     const patientName = document.getElementById('patientName').value;
//     const patientAge = document.getElementById('age').value;
//     const fatherName = document.getElementById('fatherName').value;
//     const motherName = document.getElementById('motherName').value;
//     const address = document.getElementById('address').value;
//     const phoneNumber = document.getElementById('phoneNumber').value;
//     const description = document.getElementById('description').value;
    

//     console.log(patientName,patientAge,fatherName,motherName,address,phoneNumber,description)


//     // // validation
//     // const containsNumber = /\d/;

//     // if (containsNumber.test(patientName) || containsNumber.test(fatherName) || containsNumber.test(motherName)) {
//     // alert("Names should not contain numbers. Please enter a valid name.");
//     // return;
//     // }

// const resultDiv = document.getElementById('result')

// resultDiv.innerHTML = `
//     <h3>Form Submitted</h3>
//     <p>Patient Name: ${patientName}</p>
//     <p>Age: ${patientAge}</p>
//     <p>Father's Name: ${fatherName}</p>
//     <p>Mother's Name: ${motherName}</p>
//     <p>Address: ${address}</p>
//     <p>Phone Number: ${phoneNumber}</p>
//     <p>Description: ${description}</p>
// `


// }


document.getElementById('medicalForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    const patientName = document.getElementById('patientName').value;
    const patientAge = document.getElementById('age').value;
    const fatherName = document.getElementById('fatherName').value;
    const motherName = document.getElementById('motherName').value;
    const address = document.getElementById('address').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const description = document.getElementById('description').value;

    // console.log(patientName,patientAge,fatherName,motherName,address,phoneNumber,description)

    // // validation
    const containsNumber = /\d/;

    if (containsNumber.test(patientName) || containsNumber.test(fatherName) || containsNumber.test(motherName)) {
        alert("Names should not contain numbers. Please enter a valid name.");
        return;
    }

    const resultDiv = document.getElementById('result')

    resultDiv.innerHTML = `
        <h3>Form Submitted</h3>
        <p>Patient Name: ${patientName}</p>
        <p>Age: ${patientAge}</p>
        <p>Father's Name: ${fatherName}</p>
        <p>Mother's Name: ${motherName}</p>
        <p>Address: ${address}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Description: ${description}</p>
    `

  
  });
  

//   Home work

// What is an Event?
// What is Event Handling?
// arrow function ki? er kaj?
