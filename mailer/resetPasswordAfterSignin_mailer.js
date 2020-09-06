//requiring global files
const nodemailer =  require('../config/nodemailer')

//requiring local files



//another way of exporting a method
exports.resetPasswordAfterSigningIn= (user) => {
    //html string is used to render email templates after a user successfully creates an account
    let htmlString = nodemailer.renderTemplate({user : user }, '/resetPassword/reset_password_after_singing_in.ejs')

    //using transporter
    nodemailer.transporter.sendMail({
        from : 'automailer@userauth.com',
        to : user.email,
        subject : '[IMPORTANT] HARD RESET PASSWORD DONE',
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