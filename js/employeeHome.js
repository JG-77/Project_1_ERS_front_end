//let welcomeText = document.getElementById('welcomeText');
let viewTicketBtn = document.getElementById('viewTicketBtn');
let newTicketBtn = document.getElementById('newTicketBtn');
let signoutLink = document.getElementById('signout');
// function displayName() {
//   welcomeText.innerHTML = 'Welcome, employee!';
// }

const url = 'http://localhost:7000/'; // employee/home/id

viewTicketBtn.addEventListener('click', viewMyTickets);
newTicketBtn.addEventListener('click', createTicket);
signoutLink.addEventListener('click', signout);

async function viewMyTickets() {
  // let response = await fetch(url + 'tickets', {
  //   //find endpoint path
  //   //credentials: 'include',
  // });

  // if (response.status === 200) {
  document.location.replace(url + 'html/pastTicket.html'); // past ticket url
  // } else {
  //   console.log('Could not direct you to the correct page.');
  // }
}

async function createTicket() {
  let response = await fetch(url + 'newRequest', {
    //find endpoint path
    credentials: 'include',
  });

  if (response.status === 200) {
    document.location.replace(url + 'html/newTicket.html'); // past ticket url
  } else {
    console.log('Could not direct you to the correct page.');
  }
}

async function signout() {
  let response = await fetch(url + 'signout', {
    //find endpoint path
    method: 'POST',
    credentials: 'include',
  });

  if (response.status === 200) {
    //if signout is successful, redirect to correct page
    document.location.replace(url + 'login'); //add api
  } else {
    console.log(
      'Error Status:' +
        response.status +
        'A problem occurred trying to signout.'
    );
  }
}
