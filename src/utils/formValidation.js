// Register form validation
// 1. Password not match
// 2. Validate email
// 3. Validate username
// 4. Password minium security (at least 8, include number and character)


const formValidation = (email, password, confirmPass) => {

    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (password !== confirmPass) {
        alert('Password not match');
        return false
    }

    if (pattern.test(email) === false ) {
        alert('Please provide a valid email')
        return false
    }

    const pattern2 = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (pattern2.test(password) === false ) {
        alert('Password must at least 8 character, include number')
        return false
    }

    return true
}

export default formValidation