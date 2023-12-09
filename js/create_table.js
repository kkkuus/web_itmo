document.getElementById("submit").onclick=function() {
    document.getElementById("reservation").className="not_none";
    var table = document.getElementById("reservation");
    var row = table.insertRow(-1);
    var name = row.insertCell(0);
    var event = row.insertCell(1);
    var contacts = row.insertCell(2);
    name.innerHTML = document.getElementById("name").value;
    event.innerHTML = document.getElementById("event").value;
    contacts.innerHTML = document.getElementById("contacts").value;
    return false;
}