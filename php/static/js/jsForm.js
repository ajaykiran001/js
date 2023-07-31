function validate() {
    let fname = document.getElementById('textName');
    let age = document.getElementById('textAge');
    let male = document.getElementById('genderMale');
    let female = document.getElementById('genderFemale')
    let email = document.getElementById('textEmail');
    let phoneNo = document.getElementById('textPhone');
    let userName = document.getElementById('textUserName');
    let password = document.getElementById('textPassword');
    let confirmPassword = document.getElementById('textPasswordConfirm')
    let spanFname = document.getElementById('fname_err');
    let spanAge = document.getElementById('age_err');
    let spanGender = document.getElementById('gender_err');
    let spanEmail = document.getElementById('email_err');
    let spanPhoneNo = document.getElementById('phoneNo_err');
    let spanUserName = document.getElementById('userName_err');
    let spanPassword = document.getElementById('password_err');
    let spanConfirmPassword = document.getElementById('confirmPassword_err')
    let fnamePattern = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
    let emailPattern = /\S+@\S+\.\S+/;
    let phoneNopattern = /[6-9][0-9]{9}$/
    if (fname.value == "") {
        spanFname.innerHTML = "Please enter name"
        spanFname.style.color = "red"
        fname.style.border = "1px solid red"
        return false
    }
    else {

        if (fnamePattern.test(fname.value) == false) {
            spanFname.innerHTML = "Invalid Name Format"
            spanFname.style.color = "red"
            fname.style.border = "1px solid red"
            return false
        }
        spanFname.innerHTML = ""
        spanFname.style.color = ""
        fname.style.border = ""
    }
    if (age.value == "") {
        spanAge.innerHTML = "Please enter Age"
        spanAge.style.color = "red"
        age.style.border = "1px solid red"
        return false
    }
    else {
        spanAge.innerHTML = ""
        spanAge.style.color = ""
        age.style.border = ""
    }
    if (male.checked == false && female.checked == false) {
        spanGender.innerHTML = "Please select gender"
        spanGender.style.color = "red"
        return false
    }
    else {
        spanGender.innerHTML = ""
        spanGender.style.color = ""
    }
    if (email.value == "") {
        spanEmail.innerHTML = "Please enter Email id"
        spanEmail.style.color = "red"
        email.style.border = "1px solid red"
        return false
    }
    else {
        if (emailPattern.test(email.value) == false) {
            spanEmail.innerHTML = "Invalid Email format"
            spanEmail.style.color = "red"
            email.style.border = "1px solid red"
            return false
        }
        spanEmail.innerHTML = ""
        spanEmail.style.color = ""
        email.style.border = ""
    }
    if (phoneNo.value == "") {
        spanPhoneNo.innerHTML = "Please enter Phone no"
        spanPhoneNo.style.color = "red"
        phoneNo.style.border = "1px solid red"
        return false
    }
    else {
        if (phoneNopattern.test(phoneNo.value) == false) {
            spanPhoneNo.innerHTML = "Invalid Phone no"
            spanPhoneNo.style.color = "red"
            phoneNo.style.border = "1px solid red"
            return false
        }
        spanPhoneNo.innerHTML = ""
        spanPhoneNo.style.color = ""
        phoneNo.style.border = ""
    }
    if (userName.value == "") {
        spanUserName.innerHTML = "Please enter Username"
        spanUserName.style.color = "red"
        userName.style.border = "1px solid red"
        return false
    }
    else {
        spanUserName.innerHTML = ""
        spanUserName.style.color = ""
        userName.style.border = ""
    }
    if (password.value == "") {
        spanPassword.innerHTML = "Please enter Password"
        spanPassword.style.color = "red"
        password.style.border = "1px solid red"
        return false
    }
    else {
        if (password.value.length < 8){
            spanPassword.innerHTML = "Minimum 8 charecters required"
            spanPassword.style.color = "red"
            password.style.border = "1px solid red"
            return false
        }
        spanPassword.innerHTML = ""
        spanPassword.style.color = ""
        password.style.border = ""
    }
    if(password.value != confirmPassword.value){
        spanConfirmPassword.innerHTML = "Password incorrect"
        spanConfirmPassword.style.color = "red"
        confirmPassword.style.border = "1px solid red"
        return false
    }
    else{
        spanConfirmPassword.innerHTML = ""
        spanPassword.style.color = ""
        password.style.border = ""
    }
}