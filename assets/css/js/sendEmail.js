function sendMail(contactForm) {
    emailjs.send("service_6hmngiv", "test", {
        "project_request": contactForm.projectsummary.value,
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    
}