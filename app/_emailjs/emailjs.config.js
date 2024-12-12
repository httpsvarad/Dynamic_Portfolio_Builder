import emailjs from '@emailjs/browser';

const sendEmail = (receiver, usernameTrimmed) => {
    try {
        const templateParams = {
            email: receiver,
            username: usernameTrimmed,
        };

        emailjs
            .send('service_i44e8sf', 'template_6hllapj', templateParams, {
                publicKey: 'w4HrRsBpz5caPc7nc',
            })
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (err) => {
                    console.log('FAILED...', err);
                },
            );
    } catch (error) {
        console.log(error)

    }
}

export default sendEmail