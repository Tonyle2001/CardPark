function sendMail() {
  var params = {
    to_name: document.getElementById("name").value,
    from_name: "CardPark Team",
    to_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_29e6yqm";
  const templateID = "template_pkk50tq";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}

