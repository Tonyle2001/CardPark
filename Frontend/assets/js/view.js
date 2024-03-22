
class View {

  constructor() {
  
    this.loginForm = document.getElementById('login-form');
    
    this.emailInput = document.getElementById('email');
    
    this.passwordInput = document.getElementById('password');
    
    this.messageContainer = document.createElement('div'); // Create a single message container
    
    this.loginForm.appendChild(this.messageContainer); // Append the message container to the form
  }

  getCredentials() {
      // let email = this.emailInput.value;
      // let password = this.passwordInput.value;
      // const formData = {
      //   email: email,
      //   password: password,
      // };
      // const payload = new URLSearchParams(formData)
      // fetch('http://127.0.0.1:3000/users/login',{
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded"
      // },
      //   body: payload,
      
      // })
      // .then(response => {
      //   if (!response.ok) {
      //     throw new Error('network returns error');
      //   }
      //   return {
    
      //     email: this.emailInput.value,
      
      //     password: this.passwordInput.value,
      //   };
      // })
      // .then(data => console.log(data))
      // .catch(err => {
      //     console.log("The Server is not active or something is wrong, Please fix or turn on!");
      // })
    return {
    
      email: this.emailInput.value,
      
      password: this.passwordInput.value,
    };
  }

  displayMessage(message, isSuccess) {
  
    this.messageContainer.textContent = message;
    
    this.messageContainer.style.color = isSuccess ? 'green' : 'red';
    
    this.messageContainer.style.marginTop = '10px'; // Add some spacing
  }
}
