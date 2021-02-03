//const display = document.querySelector('#outlet');
// async function save() {
//     const response2 = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
//         method: 'POST',
//         headers: {
//             // 'Accept': "application/json",
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "isbn": "test",
//             "title": "test file new ",
//             "overdueFee": 0.99,
//             "publisher": "new",
//             "datePublished": "2021-10-21"
//         })
//     })
//     const respBody = await response2.json();
//     console.log(respBody);
// }
function save() {
    const isbn = document.querySelector('#isbn').value;
    const booktitle = document.querySelector("#formGroupExampleInput").value;
    const over = document.querySelector('#overdueday').value;
    const pub = document.querySelector('#published').value;
    const date = document.querySelector('#date').value;

    console.log(booktitle)
    console.log(isbn)
    console.log(over)
    console.log(pub)
    console.log(date)

}
