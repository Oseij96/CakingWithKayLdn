document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const contactForm = document.getElementById('contactForm');
    if (!contactForm.checkValidity()) {
        event.stopPropagation();
        const formElements = contactForm.elements;
        for (let i = 0; i < formElements.length; i++) {
            if (!formElements[i].checkValidity()) {
                formElements[i].classList.add('is-invalid');
            } else {
                formElements[i].classList.remove('is-invalid');
            }
        }
    } else {
        const formData = new FormData(contactForm); 
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        
        axios({
            url: 'https://formspree.io/f/meqbowqo',
            method: 'post',
            headers: {
                'Accept': 'application/json'
            },
            data: data
        }).then((response) => {
            console.log(response);
            contactForm.reset();
            const successMessage = document.getElementById("successMessage");
            successMessage.classList.remove("d-none");
            successMessage.textContent = "Your message has been sent!";
            setTimeout(function () {
                successMessage.classList.add("d-none");
            }, 3000);
        }).catch((error) => {
            // Handle the error if the request fails
            console.error('Error submitting the form:', error);
        });
    }
});






