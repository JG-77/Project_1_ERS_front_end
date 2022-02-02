let loginBtn = document.getElementById('loginBtn');
const url = 'http://localhost:7000/';

loginBtn.addEventListener('onclick', loginUser);

async function loginUser() {
  let user = {
    user_Name: document.getElementById('inputLoginUser').value, //input values will make up user object
    user_Pass: document.getElementById('inputLoginPassword').value,
  };

  let response = await fetch(url + 'login', {
    method: 'POST',
    body: JSON.stringify(user),
    credentials: 'include', //stores cookie
  });

  if (response.status === 200) {
    //check role ID for access control
    let roleID = await response.json();
    if (roleID !== 2) {
      document.location.replace(url + 'html/employeeHome.html');
    } else {
      document.location.replace(url + 'html/managerHome.html');
    }
  } else {
    console.log('Error Status:' + response.status + ' Login failed!');
  }
}
