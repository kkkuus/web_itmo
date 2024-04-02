
function showTable() {
    let table = document.getElementById("reservation");
    var row = "";

    if (localStorage.length !== 0) {
        document.getElementById("reservation").className="not_none";
        for (let i = 0; i < localStorage.length; i++) {
            let id = localStorage.key(i);
            let info = JSON.parse(localStorage.getItem(id));
            row += "<tr>";
            row += "<td>" + info["name"] + "</td>";
            row += "<td>" + info["event"] + "</td>";
            row += "<td>" + info["contacts"] + "</td> </tr>";
        }

        table.innerHTML += row;
    }
}

document.getElementById("submit").onclick=function() {
    document.getElementById("reservation").className="not_none";
    var table = document.getElementById("reservation");
    var row = table.insertRow(-1);
    var name = row.insertCell(0);
    var event = row.insertCell(1);
    var contacts = row.insertCell(2);
    name_row = document.getElementById("name").value;
    event_row = document.getElementById("event").value;
    contacts_row = document.getElementById("contacts").value;
    const user = {
        name: name_row,
        event: event_row,
        contacts: contacts_row
    };
    console.log(user)
    name.innerHTML = name_row;
    event.innerHTML = event_row;
    contacts.innerHTML = contacts_row;

    localStorage.setItem(localStorage.length + 1, JSON.stringify(user));
    id++;
    return false;
}


showTable()