var selectBtn = document.getElementById('filterSelect');
//var allOption = document.getElementById('allTickets');
// var approvedOption = document.getElementById('approvedTickets');
// var deniedOption = document.getElementById('deniedTickets');
// var completeOption = document.getElementById('completedTickets');
// var pendingOption = document.getElementById('pendingTickets');
var signoutLink = document.getElementById('signout');

signoutLink.addEventListener('click', signout);
selectBtn.addEventListener('click', selectTicketOpt)

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

async function selectTicketOpt() {
  const option = selectBtn.value; //value attribute for each <option>
  let response = await fetch(url + 'status', {
    //find endpoint path
    credentials: 'include',
  });

  if (response.status === 200) {
    let tix = await response.json();
    switch (
      option //switch cases for select filter options
    ) {
      case 'all':
        getAllTix(tix);
        break;
      case 'approved':
        getApproved(tix);
        break;
      case 'denied':
        getDenied(tix);
        break;
      case 'completed':
        getCompleted(tix);
        break;
      case 'pending':
        getPending(tix);
        break;
    }
  } else {
    console.log('Could not bring up tickets.');
  }
}

function getAllTix(tix) {
    //data.reim_stauts_id == # 
  //for loop (tix in tix)
};

function getApproved(tix);
function getDenied(tix);
 function getCompleted(tix);
 function getPending(tix);
