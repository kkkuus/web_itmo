function showLocalStorage() {
    let text = document.getElementById("#reservation");
    var tableRow = "";

    if (localStorage.length !== 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let name = localStorage.key(i);

            // if (name === 'user' || name === 'error') {
            //     continue;
            // }
            let info = JSON.parse(localStorage.getItem(name));

            tableRow += "<tr>";
            tableRow += "<td>" + name + "</td>";
            tableRow += "<td>" + info[0][0] + "</td>";
        }

        text.innerHTML += tableRow;
    }
}

