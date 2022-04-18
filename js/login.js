function login(event){
  event.preventDefault();
 var mail = document.getElementById('mail');
 var password = document.getElementById('password');

 let isValidated = true;

 if (mail.value == ''){
   mail.classList.add('is-invalid');
   mail.classList.remove('is-valid');
   isValidated = false;
 }
 else {
   mail.classList.add('is-valid');
   mail.classList.remove('is-invalid'); 
 }

 if (password.value == ''){
  password.classList.add('is-invalid');
  password.classList.remove('is-valid');
  isValidated = false;
}
else {
  password.classList.add('is-valid');
  password.classList.remove('is-invalid'); 
}

if (isValidated == true){
  let users = JSON.parse(localStorage.getItem("users")) ||[];
   
  //  let userFound = users.find(user => {
  //  console.log(user);
  //  return user.mail == mail.value && user.password == password.value;
  //  })
   let userFound = users.find(user => user.mail == mail.value && user.password == password.value);
   //console.log(userFound);
   if (userFound != undefined){
     localStorage.setItem('connectedUser',JSON.stringify(userFound));
     document.location.href="dashboard.html";
   }
   else {
     alert('E-mail ou mot de passe est incorrect')
   }
}

}