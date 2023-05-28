// Validate password
// Password minium security (at least 8, include number and character)

const passwordValidation = (password, confirmPass) => {
    const pattern2 = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    
    if (password !== confirmPass) {
        alert('Password not match');
        return false
    }
    if (pattern2.test(password) === false ) {
        alert('Password must at least 8 character, include number')
        return false
    }

    return true
}

export default passwordValidation;