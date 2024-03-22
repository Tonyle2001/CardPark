class App {

  constructor(view, userModel) {
  
    this.view = view;
    
    this.userModel = userModel;
  }

  login() {
  
    const { email, password } = this.view.getCredentials();
    
    // if (email !== this.userModel.user.email) {
    
    //   this.view.displayMessage('Incorrect email.', false);
      
    // } else if (password !== this.userModel.user.password) {
    
    //   this.view.displayMessage('Incorrect password.', false);
      
    // } 
    console.log(this.userModel.getUID());

    if((this.userModel.getUID()) === 0){
      this.view.displayMessage('Incorrect email.', false);
    }
    else {
    
      this.view.displayMessage('Login Successful!', true);
      
      window.location.href = 'Home.html'; // Redirect to home page on successful login
    }
  }
}
