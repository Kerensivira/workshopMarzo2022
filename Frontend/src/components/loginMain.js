const signupForm = document.querySelector('#survey-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let user = {
        email : document.querySelector('#email').value,
        password : document.querySelector('#password').value
    }

    localStorage.setItem('user',user)

    console.log(user)

        window.location.href = '/Frontend/index.html'
    

})



