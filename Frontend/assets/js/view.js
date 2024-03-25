
class View {

  constructor() {
  
    this.loginForm = document.getElementById('login-form');
    
    this.emailInput = document.getElementById('email');
    
    this.passwordInput = document.getElementById('password');
    
    this.messageContainer = document.createElement('div'); // Create a single message container
    
    this.loginForm.appendChild(this.messageContainer); // Append the message container to the form
  }

  getCredentials() {
      
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
