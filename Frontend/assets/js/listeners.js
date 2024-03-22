//document.addEventListener('DOMContentLoaded', () => {

  const view = new View();
  

  view.loginForm.addEventListener('submit', function(e) {
  
    e.preventDefault(); // Prevent the form from submitting in the traditional way
    
    var uid = 0;
    //const view = new View();

    const formData = view.getCredentials();
    console.log(formData);
    const payload = new URLSearchParams(formData)
    fetch('http://127.0.0.1:3000/users/login',{
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
      body: payload,
    
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('network returns error');
      }
      return response.json();
    })
    .then(data => {
      uid = data.user;
      console.log(uid);
      const userModel = new UserModel(uid);
    
      const app = new App(view, userModel);
      app.login();
    
    })
    .catch(err => {
        console.log("The Server is not active or something is wrong, Please fix or turn on!");
    })
    
 
    
  });
//});
