const signupForm = document.querySelector('#survey-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const signupEmail = document.querySelector('#email').value;
    const signupPassword = document.querySelector('#password').value;

console.log (signupEmail, signupPassword)

})

