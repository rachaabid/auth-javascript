function register(event){
  event.preventDefault();
  var n = document.getElementById("name");
  var p = document.getElementById("prenom");
  var e = document.getElementById("mail");
  var m = document.getElementById("password");
  var c = document.getElementById("confirmation");
  let isValidated = true;

  if (n.value == "") {
    n.classList.add("is-invalid");
    n.classList.remove("is-valid");
    isValidated = false;
  }
  else {
    n.classList.add("is-valid");
    n.classList.remove("is-invalid");
  }
  // console.log(n.classList);

  if (p.value == "") {
    p.classList.add("is-invalid");
    p.classList.remove("is-valid");
    isValidated = false;
  }
  else {
    p.classList.add("is-valid");
    p.classList.remove("is-invalid");
  }
  // console.log(p.classList);

  if (e.value == "" || e.value.indexOf('@')==-1) {
    e.classList.add("is-invalid");
    e.classList.remove("is-valid");
    isValidated = false;
  }
  else {
    e.classList.add("is-valid");
    e.classList.remove("is-invalid");
  }
  // console.log(e.classList);

  if (m.value == "") {
    m.classList.add("is-invalid");
    m.classList.remove("is-valid");
    isValidated = false;
  }
  else {
    m.classList.add("is-valid");
    m.classList.remove("is-invalid");
  }
  // console.log(m.classList);

  if (c.value == "") {
    c.classList.add("is-invalid");
    c.classList.remove("is-valid");
    isValidated = false;
  }
  else {
    c.classList.add("is-valid");
    c.classList.remove("is-invalid");
  }
  // console.log(c.classList);
   
  if (isValidated == true){
    let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = {
    name: n.value,
    prenom: p.value,
    mail: e.value,
    password: m.value
  }
  users.push(user);
  localStorage.setItem("users",JSON.stringify(users));
  document.location.href="login.html";
}
  }

  
