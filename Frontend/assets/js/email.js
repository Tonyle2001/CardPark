function sendMail() {
    let issue = document.querySelector("#issue-selector")
    let letter = document.querySelector("#parkingLot-selector")
    let spotnum = document.querySelector("#spotNumber")
    let description = document.querySelector("#description")

    var params = {
      to_name: "Campus Security",
      from_name: "CardPark Team",
      to_email: "Tonyle200185@gmail.com",
      issue: issue.value,
      letter: letter.value,
      spot: spotnum.value,
      description: description.value,
    };
  
    const serviceID = "service_29e6yqm";
    const templateID = "template_kud6ob6";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
        //   document.getElementById("name").value = "";
        //   document.getElementById("email").value = "";
        //   document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }