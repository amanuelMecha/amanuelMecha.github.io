
async function save() {
    const response2 = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
        method: 'POST',
        headers: {
            // 'Accept': "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "isbn": document.querySelector('#isbn').value,
            "title": document.querySelector("#formGroupExampleInput").value,
            "overdueFee": document.querySelector('#overdueday').value,
            "publisher": document.querySelector('#published').value,
            "datePublished": document.querySelector('#dateplace').value
        })
    })
    alert(`Book succesfully added `)
    const respBody = await response2.json();
    console.log(respBody);
}