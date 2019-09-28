const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

sgMail.send({
    to: 'chandu3245@gmail.com',
    from: 'Chandu3245@gmail.com',
    subject: 'Just testing sending mail from sendgrid',
    text: "Hello there"
});


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chandu3245@gmail.com',
        subject: `Welcome ${name}`,
        text: 'Thanks for joining us, explore !!!'
    })
}

const sendGoodByeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chandu3245@gmail.com',
        subject: `Sorry to see you go ${name}`,
        text: 'Provide your complaints to serve you better next time.'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeMail
}