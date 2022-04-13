function login(event){
  event.preventDefault();
 var mail = document.getElementById('mail');
 var password = document.getElementById('password');

 if (mail.value == ''){
   mail.classList.add('is-invalid');
   mail.classList.remove('is-valid');
 }
 else {
   mail.classList.add('is-valid');
   mail.classList.remove('is-invalid'); 
 }

 if (password.value == ''){
  password.classList.add('is-invalid');
  password.classList.remove('is-valid');
}
else {
  password.classList.add('is-valid');
  password.classList.remove('is-invalid'); 
}
}