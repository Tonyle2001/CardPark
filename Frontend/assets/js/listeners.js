document.addEventListener('DOMContentLoaded', () => {

  const view = new View();
  
  const userModel = new UserModel();
  
  const app = new App(view, userModel);

  view.loginForm.addEventListener('submit', function(e) {
  
    e.preventDefault(); // Prevent the form from submitting in the traditional way
    
    app.login();
  });
});
