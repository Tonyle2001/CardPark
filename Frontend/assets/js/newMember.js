var myform = document.getElementById("myform");

myform.addEventListener("submit", (e) => {
    e.preventDefault();

    //var myform = document.getElementById("myform");
    const formData = new FormData(myform);
    const payload = new URLSearchParams(formData)
    console.log([...payload]);


    const form = {
        Fname: "Tony",
        Lname: "Le",
        Email: "avle@noctrl.edu",
        passwrd: 1357,
        UID: 2468,
      };

    console.log(JSON.stringify(form));
    console.log(payload);
    fetch('http://localhost:3000/users/add', {
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
    .then(data => console.log(data))
    .catch((error) => {
        // Handle error
        console.log("error ", error);
      });

});