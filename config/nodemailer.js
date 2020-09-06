const nodemailer = require('nodemailer')
const ejs = require('ejs')
const path = require('path')



let transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'usercheck824',
        pass: 'User@1234'
    }
});

let renderTemplate = (data, relativePath) => {
    let mailHtml;
    ejs.renderFile(
        path.join(__dirname, '../views/mailers', relativePath),
        data,
        function (err, template) {
            if (err) {
                console.log("error in rendering template", err);
                return;
            }
            else {
                mailHtml = template
                return;
            }
        }
    );

    return mailHtml;

};

module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
};