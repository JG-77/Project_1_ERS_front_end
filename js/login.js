let loginBtn = document.getElementById('loginBtn');
//input values from login form
// const userNameInput = document.getElementById('inputLoginUser').value;
// const passwordInput = document.getElementById('inputLoginPassword').value;
// const userNameInput = 'newuser';
// const passwordInput = 'password';
const url = 'http://localhost:7000/';

loginBtn.addEventListener('onclick', loginUser);

async function loginUser() {
  let user = {
    user_Name: document.getElementById('inputLoginUser').value, //input values will make up user object
    user_Pass: document.getElementById('inputLoginPassword').value,
  };
  // console.log(user);
  // console.log(JSON.stringify(user));
  // console.log(document.getElementById('inputLoginUser').value);
  // console.log(document.getElementById('inputLoginPassword').value);
  let response = await fetch(url + 'login', {
    method: 'POST',
    body: JSON.stringify(user),
    credentials: 'include', //stores cookie
  });

  if (response.status === 200) {
    //if login is successful, redirect to correct page
    //identify if employee or manager
    document.location.replace(url + ''); //add api

    console.log('success manager');
  } else {
    console.log('Error Status:' + response.status + ' Login failed!');
  }
}
