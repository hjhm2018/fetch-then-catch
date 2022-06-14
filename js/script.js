let array = [];

let tableBody = document.getElementById('tableBody');

let drawTable = () => {
    if (array.length > 0) {
        array.map(item => {
            tableBody.innerHTML += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.title.charAt(0).toUpperCase()}${item.title.slice(1)}</td>
                    <td>${item.completed ? "&#9989;" : "&#10060;"}</td>
                </tr>
            `
        })
    }
}

let ajax = () => {
    let response = fetch('https://jsonplaceholder.typicode.com/todos');

    response.then(res => {
        let data = res.json();


        data.then(res => {

            res.splice(10);

            array = res;

            drawTable();
        })

    })
        .catch(error => console.log(error));
}

ajax();





