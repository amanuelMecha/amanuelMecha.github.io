async function save() {
    const response2 = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
        method: 'POST',
        headers: {
            // 'Accept': "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "isbn": document.querySelector('#isbn').value,
            "title": document.querySelector("#bookTitle").value,
            "overdueFee": document.querySelector('#overdueday').value,
            "publisher": document.querySelector('#published').value,
            "datePublished": document.querySelector('#dateplace').value
        })
    })
    const respBody = await response2.json();
    var x = respBody.bookId;
    console.log(`amanuel best` + respBody.bookId);
    if (respBody.bookId == null || respBody.title == null || respBody.isbn == null || respBody.overdueFee == null || respBody.publisher == null || respBody.datePublished == null) {
        alert(`Enter data on the required form `)
        bookDelete(x)
        async function bookDelete(x) {
            const response = await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/${x}`, {
                method: 'DELETE'
            })
            setInterval(_ => {
                location.replace("book.html")
            })
            // console.log(x)
        }

    } else {
        alert(`Book successfully added! `)
    }
    setTimeout(_ => {
        location.replace("addBook.html")
    }, 1000)

}