//let welcomeText = document.getElementById('welcomeText');
let viewTicketBtn = document.getElementById('viewTicketBtn');
let newTicketBtn = document.getElementById('newTicketBtn');
let signoutLink = document.getElementById('signout');
let requestTbl = document.getElementById('tixTable');

const url = 'http://localhost:7000/'; // employee/home/id

viewTicketBtn.addEventListener('click', viewMyTickets);
newTicketBtn.addEventListener('click', createTicket);
signoutLink.addEventListener('click', signout);

async function viewMyTickets() {
  let response = await fetch(url + 'employee/tickets', {
    //find endpoint path
    credentials: 'include',
  });

  if (response.status === 200) {
    //document.location.replace(url + 'html/pastTicket.html'); // past ticket url
    let allMyTickets = await response.json();
    //newTicketBtn.innerHTML = '';
    console.log(allMyTickets);
    displayAllMyTix(allMyTickets);
  } else {
    console.log('Could not direct you to the correct page.');
  }
}

function displayAllMyTix(allMyTickets) {
  console.log(allMyTickets);

  let request = {
    // id: 4,
    // amount,
    // Description,
    // timeSubmitted,
    // timeResolved,
    // type,
    // ticket_status,
  };

  for (let ticket of allMyTickets) {
    //ticket is one object from 'allMyTickets
    let row = document.createElement('tr');

    for (let data in ticket) {
      //data are the 4 properties of the object --> request, type, status, user
      let ticketData = ticket[data];
      console.log(ticket);
      console.log(request);
      request.id = ticketData.reimbursement_ID;
      console.log(request.id);
      // if (
      //   data != 'user'
      //   //&&
      //   // ticketData != 'resolver_ID' &&
      //   // ticketData != 'author_ID' &&
      //   // ticketData != 'reciept' &&
      //   // ticketData != 'status_ID' &&
      //   // ticketData != 'type_ID'
      // ) {
      //   let idData = document.createElement('td');
      //   let amountData = document.createElement('td');
      //   let descrData = document.createElement('td');
      //   let timeSubData = document.createElement('td');
      //   let timeResData = document.createElement('td');
      //   let typeData = document.createElement('td');
      //   let statusData = document.createElement('td');
      //   //if (data != undefined) {

      //   idData.innerText = ticketData.reimbursement_ID;
      //   amountData.innerText = ticketData.reimbursement_Amount;
      //   descrData.innerText = ticketData.description;
      //   timeSubData.innerText = ticketData.time_Submitted;
      //   timeResData.innerText = ticketData.time_Resolved;
      // typeData.innerText = data;
      // statusData.innerText = data;

      // if (data == 'request') {
      //   for (i = 0; i < ticketData.length; i++)
      //     tableData.innerText = ticketData[i];
      //   // tableData.innerText = ;
      // }

      // console.log(ticket);
      // console.log(data);

      // console.log(ticketData.reimbursement_ID);
      // console.log(ticketData.reimbursement_Amount);
      // console.log(ticketData.description);
      // console.log(ticketData.time_Submitted);
      // console.log(ticketData.time_Resolved);
      //console.log(data);
      console.log(ticketData);
      console.log(data);

      // row.appendChild(idData);
      // row.appendChild(amountData);
      // row.appendChild(descrData);
      // row.appendChild(timeSubData);
      // row.appendChild(timeSubData);
      // row.appendChild(timeResData);
      // row.appendChild(typeData);
      // row.appendChild(statusData);
      //}
      //}
    }
    //requestTbl.appendChild(row);
  }
}

function createTicket() {
  // let response = await fetch(url + 'newRequest', {
  //   //find endpoint path
  //   credentials: 'include',
  // });

  // if (response.status === 200) {
  document.location.replace(url + 'html/newTicket.html'); // past ticket url
  // } else {
  //   console.log('Could not direct you to the correct page.');
  // }
}

// async function signout() {
//   let response = await fetch(url + 'signout', {
//     //find endpoint path
//     method: 'POST',
//     credentials: 'include',
//   });

//   if (response.status === 200) {
//     //if signout is successful, redirect to correct page
//     document.location.replace(url + 'login'); //add api
//   } else {
//     console.log(
//       'Error Status:' +
//         response.status +
//         'A problem occurred trying to signout.'
//     );
//   }
// }
