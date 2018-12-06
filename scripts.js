const contactData2 = [
  {
    id: 0,
    name: "Christian",
    email: "christian@yahoo.com",
    phone: "325-555-1234",
    address: "6539 Wilton Ave. Spokane WA 90234",
    status: "green"
  },
  {
    id: 1,
    name: "Rich",
    email: "rich@tripod.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Spokane Valley WA CA 90234",
    status: "green"
  },
  {
    id: 2,
    name: "Scott",
    email: "scott@mailinator.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Liberty Lake WA 90234",
    status: "green"
  },
  {
    id: 3,
    name: "Danny",
    email: "danny@hotmail.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Seattle WA 90234",
    status: "green"
  },
  {
    id: 4,
    name: "Taka",
    email: "taka@myspace.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Tacoma WA 90234",
    status: "red"
  },
  {
    id: 5,
    name: "Tim",
    email: "tim@netscape.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Olympia WA 90234",
    status: "dull-yellow"
  },
  {
    id: 6,
    name: "Patrick",
    email: "patrick@live.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Vancouver WA 90234",
    status: "green"
  },
  {
    id: 7,
    name: "Jacques",
    email: "jacques@aol.com",
    phone: "323-555-1234",
    address: "6539 Wilton Ave. Deer Park WA 90234",
    status: "yellow"
  }
];

const list = document.getElementById("contact-list");

function onLoad() {
  const select = document.getElementById("display-selection");
  select.onchange = function() {
    displayContacts(getSelectedOption());
  };

  displayContacts(getSelectedOption());
}

/*************************************************************
   Displays the contacts in 1 of 3 modes
   1) All contact names & emails
   2) All contact names & phone numbers
   3) Only 1 selected contact name and the corresponding
      contact email, phone, and address
  
   The mode is decided by the passed in mode parameter.
   
   By default, the mode is set to email. It can be changed
   in the following ways:
    - selecting phone in the select input
    - clicking a contact name
  
   *************************************************************/

function displayContacts(mode) {
  clearTable();

  //add each contact to the table
  contactData2.forEach(function(contact) {
    //creating row
    const row = document.createElement("div");
    row.className = "contact-row";

    //creating and adding contact name cell
    const col1 = document.createElement("div");
    col1.innerText = contact.name;
    col1.className = "contact-name";
    col1.id = contact.id;
    col1.onclick = this.onContactClick;
    row.appendChild(col1);

    //creating and adding contact info
    if (typeof mode === "number") {
      if (contact.id === mode) {
        row.appendChild(buildContactDetails(contact));
        col1.className = col1.className + " selected-contact";
      } else {
        row.className = row.className + " not-selected-contact";
      }
    }

    const col2 = document.createElement("div");
    mode === "email"
      ? (col2.innerText = contact.email)
      : (col2.innerText = contact.phone);

    col2.className = "contact-info";
    row.appendChild(col2);

    list.appendChild(row);
  });
}

/*************************************************************
 *************************************************************/
function onContactClick(event) {
  console.log("selected: ", event.target.selected);
  if (event.target.selected === "true") {
    event.target.selected = "false";
    displayContacts("email");
  } else {
    console.log("1");
    event.target.selected = "true";
    console.log(event.target.selected);
    displayContacts(parseInt(event.target.id));
  }
}

/*************************************************************
 *************************************************************/
function getSelectedOption() {
  const select = document.getElementById("display-selection");
  return select.options[select.selectedIndex].value;
}

function clearTable() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function buildContactDetails(contact) {
  const infoContainer = document.createElement("div");
  const col2 = document.createElement("div");
  infoContainer.className = "info-container";
  const r1 = document.createElement("div");
  const a = document.createElement("a");
  const r2 = document.createElement("div");
  const r3 = document.createElement("div");

  a.href = "mailto:" + contact.email;
  a.innerText = contact.email;
  r1.appendChild(a);

  r2.innerText = contact.phone;
  r3.innerText = contact.address;

  r1.className = "contact-email contact-details";
  r2.className = "contact-details";
  r3.className = "contact-details";

  infoContainer.appendChild(r1);
  infoContainer.appendChild(r2);
  infoContainer.appendChild(r3);

  infoContainer.className = "contact-info-complete";
  col2.appendChild(infoContainer);

  return col2;
}

onLoad();
