const nodemailer =  require('../config/nodemailer')
//const user = require('../models/user')


//another way of exporting a method
exports.newUser = (user) => {
    console.log("inside newUser mailer",user)
    console.log('****user email-****',user.email)

    nodemailer.transporter.sendMail({
        from : 'usercheker824@gmail.com',
        to : user.email,
        subject : 'Welcome to User-Auth',
        html :'<h1> Welcome to User-Auth! </h1>'
    },(error,info)=>{
        if(error){
            console.log('error in sending mail', error)
            
            return;
        }
        console.log('mail deliverd',info)
        return;
    })
}