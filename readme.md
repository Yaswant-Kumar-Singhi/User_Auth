# User-Auth

>User-Auth : A starter code for any authentication application. Feel free to use it and make changes accoring to your choice.

![](https://img.shields.io/badge/version-1.0.1-orange?style=for-the-badge&logo=appveyor) ![](https://img.shields.io/badge/dependencies-up%20to%20date-success?style=for-the-badge&logo=appveyor) 
![](https://img.shields.io/badge/platform-win--32%20%7C%20win--64-lightgrey?style=for-the-badge&logo=appveyor)
![](https://img.shields.io/badge/website-offline-lightgrey?style=for-the-badge&logo=appveyor) 

![](https://img.shields.io/badge/node--lts%40latest-10.15.0-brightgreen)
![](https://img.shields.io/badge/bcrypt-5.0.0-red)
![](https://img.shields.io/badge/connect--flash-0.1.1-brightgreen)
![](https://img.shields.io/badge/crypto-1.0.1-red)
![](https://img.shields.io/badge/multer-1.4.2-brightgreen)
![](https://img.shields.io/badge/nodemailer-6.4.11-red)
![](https://img.shields.io/badge/passport-0.4.1-brightgreen)
![](https://img.shields.io/badge/passport--google--oauth-2.0.0-red)

For video explanation <a href="https://youtu.be/cUIK4mOit1k">click me!</a> or you can go to https://youtu.be/cUIK4mOit1k

```
Demo
```
![](Demo.gif)

### Features
- [x] Signup users with unique emailID.
- [x] Client side verification of emailID.
- [x] Client side verification of password pattern (minlength=8chars).
- [x] Client gets a successful welcome email from the platform.
- [x] Sign In using verified emailID.
- [x] Client can update password after login.
- [x] Client gets a successful email for updating the password.
- [x] Client can reset the password after login.
- [x] Client gets a successful reset password email after reseting the password.

### Added Feature
- [x] Use of notifications.
- [x] Error notification if their is password mismatch while singing up, loging in and reseting password.
- [x] Successful notification for signing in/signing out , updating and reseting the password.
- [x] Use of Social Login - Google Login/Sigup 
- [x] Use of Nodemailer

### Technology Stack Used

Particulars | Version
----------- | ---------
bcrypt | 5.0.0
connect-mongo | 3.2.0
cookie-parser	| 1.4.5
crypto | 1.0.1
ejs	| 3.1.3
express	| 4.17.1
express-ejs-layouts	| 2.5.0
express-session	| 1.17.1
mongoose	| 5.9.19
multer | 1.4.2
nodejs | 10.15.0
node-sass-middleware	| 0.11.0
nodemailer | 6.4.11
passport	| 0.4.1
passport-google-oauth | 2.0.0
passport-local	| 1.0.0

#### How To Strat my Application?

* Install dependencies for my project to start
```
npm install

```
* Configure Google-oauth-credentials
```
Go to config folder -> select passport-google-oauth2-strategy.js
Then,
Put your, ClientID, ClientSecret and callbackURL for successful google login/signup process
```
* Configure Nodemailer
```
Go to config folder -> select nodemailer.js
Then,
write your emailID and password over their.
```

* Run MongoDb Server Locally by using connection string
```
mongodb://localhost/userAuth

```
* Strat by using below command
```
npm strat 
 
```
### Home Page
![](https://github.com/Yaswant-Kumar-Singhi/User_Auth/blob/master/assets/screenshot/HomePage.JPG)


### SignUp Page
![](https://github.com/Yaswant-Kumar-Singhi/User_Auth/blob/master/assets/screenshot/signupForm.JPG)


### Sign In Page
![](https://github.com/Yaswant-Kumar-Singhi/User_Auth/blob/master/assets/screenshot/loginForm.JPG)


### User Home Page
![](https://github.com/Yaswant-Kumar-Singhi/User_Auth/blob/master/assets/screenshot/UserHomePage.JPG)


### User Profile Page
![](https://github.com/Yaswant-Kumar-Singhi/User_Auth/blob/master/assets/screenshot/UserProfileDashboardView.JPG)

### Description of Routes

`localhost:8000/   :` Home Page. <br>
`user/signup       :` Creting a user. <br>
`user/signin       :` Login a user. <br>
`user/profile      :` Going to user profile.<br>
`user/update       :` Updating user password.<br>
`user/reset        :` Reseting user password.<br>
`user/sign-out     :` User can sign out from the platform.<br>

#### File directory structure.
```
$ tree
.
├── assets
│   ├── css
|     ├── footer.css
│     ├── header.css
|     ├── layout.css
|     ├── profile.css
|     ├── signin.css
|     └── sign_up.css
│   ├── js
|   ├── screenshort
|   └── scss
|    ├── footer.scss
│    ├── header.scss
|    ├── layout.scss
|    ├── profile.scss
|    ├── signin.scss
|    └── sign_up.scss
├── config
│   ├── middleware.js
|   ├── mongoose.js
|   ├── nodemailer.js
|   ├── passport-google-oauth2-strategy.js
│   └── passport-local-strategy.js
├── controllers
│   ├── home_controller.js
|   └── user_controller.js
├── mailer
│   ├── resetPasswordAfterSignin_mailer.js
|   ├── updatePasswordAfterSignin_mailer.js
|   └── welcomeUser_mailer.js
├── models
│   └── user.js
├── routes
│   ├── index.js
|   └── users.js
├── views
│   ├── mailer
│       ├──newuser 
|          └── new_user.ejs
│       ├── resetPassword
|          └── reset_password_after_singing_in.ejs
|       ├── updatePassword
|          └── update_password_after_sign-in.ejs.ejs
│   ├── _footer.ejs
│   ├── _header.ejs
|   ├── layout.ejs
│   ├── profile.ejs
|   ├── signin.ejs
|   └── signup.ejs
├── index.js
├── package.json
├── package-lock.json
├── node_modules
└── README.md
```
# :eyes: End of my ReadME. Follow me if you like it!!!