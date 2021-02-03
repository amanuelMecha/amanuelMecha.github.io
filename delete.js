
async function bookDelete(x) {
    const response = await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/${x}`, {
        method: 'DELETE'
    })
    setInterval(_ => {
        location.replace("book.html")
    }, 0)
    // console.log(x)
}