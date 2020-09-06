//requiring global files
const nodemailer =  require('../config/nodemailer')

//requiring local files



//another way of exporting a method
exports.updatePasswordAfterSigningIn = (user) => {
    //html string is used to render email templates after a user successfully creates an account
    let htmlString = nodemailer.renderTemplate({user : user }, '/updatePassword/update_password_after_sign-in.ejs')

    //using transporter
    nodemailer.transporter.sendMail({
        from : 'automailer@userauth.com',
        to : user.email,
        subject : 'Password Update Successful',
        html : htmlString
    },(error,info)=>{
        if(error){
            console.log('error in sending mail', error)
            
            return;
        }
        console.log('mail deliverd',info)
        return;
    })
}