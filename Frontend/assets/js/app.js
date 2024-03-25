class App {

  constructor(view, userModel) {
  
    this.view = view;
    
    this.userModel = userModel;
  }

  login() {
  
    const { email, password } = this.view.getCredentials();
    
    
    console.log(this.userModel.getUID());

    if((this.userModel.getUID()) === null){
      this.view.displayMessage('Incorrect email or Password.', false);
    }
    else {
    
      this.view.displayMessage('Login Successful!', true);
      
      window.location.href = 'Home.html'; // Redirect to home page on successful login
    }
  }
}
