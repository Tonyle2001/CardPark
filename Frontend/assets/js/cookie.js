function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*30*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function delete_cookie( name, path ) {
    if( getCookie( name ) ) {
      document.cookie = name + "=" +
        ";expires=Thu, 01 Jan 1970 00:00:01 GMT;"+
        ((path) ? ";path="+path:"");
    }
  }

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = alert("Please go back to login screen");
     
  }
}

document.getElementById("mySidenav").addEventListener("click", (e) =>{
    e.preventDefault();
    delete_cookie("username" ,";path=/")
})

document.getElementById("login-form").addEventListener("submit", (e)=>{
    e.preventDefault();
    alert(document.getElementById(email).value);
    setCookie("username",document.getElementById(email).value, 1);
})

checkCookie();