class UserModel {

  constructor() {
  
    // Simulated user data
    this.user = {
    
      email: "user@noctrl.edu",
      
      password: "password123", // passwords should not be stored or checked like this
    };
  }

  validateUser(email, password) {
  
    return email === this.user.email && password === this.user.password;
  }
}
