function register(event){
  event.preventDefault();
  var n = document.getElementById("name");
  var p = document.getElementById("prenom");
  var e = document.getElementById("mail");
  var m = document.getElementById("password");
  var c = document.getElementById("confirmation");

  let z = JSON.parse(localStorage.getItem("user"));
  const user = {
    name: n.value,
    prenom: p.value,
    mail: e.value,
    password: m.value,
    confirmation: c.value
  }

  localStorage.setItem("user",JSON.stringify(user));
  // document.location.reload();

  if (n.value == "") {
    n.classList.add("is-invalid");
    n.classList.remove("is-valid");
  }
  else {
    n.classList.add("is-valid");
    n.classList.remove("is-invalid");
  }
  // console.log(n.classList);

  if (p.value == "") {
    p.classList.add("is-invalid");
    p.classList.remove("is-valid");
  }
  else {
    p.classList.add("is-valid");
    p.classList.remove("is-invalid");
  }
  // console.log(p.classList);

  if (e.value == "") {
    e.classList.add("is-invalid");
    e.classList.remove("is-valid");
  }
  else {
    e.classList.add("is-valid");
    e.classList.remove("is-invalid");
  }
  // console.log(e.classList);

  if (m.value == "") {
    m.classList.add("is-invalid");
    m.classList.remove("is-valid");
  }
  else {
    m.classList.add("is-valid");
    m.classList.remove("is-invalid");
  }
  // console.log(m.classList);

  if (c.value == "") {
    c.classList.add("is-invalid");
    c.classList.remove("is-valid");
  }
  else {
    c.classList.add("is-valid");
    c.classList.remove("is-invalid");
  }
  // console.log(c.classList);
}
