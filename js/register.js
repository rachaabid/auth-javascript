function register(){
  var n = document.getElementById("inputname");
  var p = document.getElementById("inputprenom");
  var e = document.getElementById("inputmail");
  var m = document.getElementById("inputpassword");
  var c = document.getElementById("inputconfirmation");

  if (n.value == "") {
    n.classList.add("is-invalid");
    n.classList.remove("is-valid");
  }
  else {
    n.classList.add("is-valid");
    n.classList.remove("is-invalid");
  }
  console.log(n.classList);

  if (p.value == "") {
    p.classList.add("is-invalid");
    p.classList.remove("is-valid");
  }
  else {
    p.classList.add("is-valid");
    p.classList.remove("is-invalid");
  }
  console.log(p.classList);

  if (e.value == "") {
    e.classList.add("is-invalid");
    e.classList.remove("is-valid");
  }
  else {
    e.classList.add("is-valid");
    e.classList.remove("is-invalid");
  }
  console.log(e.classList);

  if (m.value == "") {
    m.classList.add("is-invalid");
    m.classList.remove("is-valid");
  }
  else {
    m.classList.add("is-valid");
    m.classList.remove("is-invalid");
  }
  console.log(m.classList);

  if (c.value == "") {
    c.classList.add("is-invalid");
    c.classList.remove("is-valid");
  }
  else {
    c.classList.add("is-valid");
    c.classList.remove("is-invalid");
  }
  console.log(c.classList);
}
