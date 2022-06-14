let array = [];

let container = document.getElementById('container');

let ajax = () => {
    let response = fetch('https://jsonplaceholder.typicode.com/todos');

    response.then(res => {
        let data = res.json();

        data.then(res => {
            // console.log(res);

            array = res;
        })

    })
        .catch(error => console.log(error));
}

ajax();





