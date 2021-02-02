
window.onload = function () {
    const display = document.querySelector('#outlet');
    // bookPage();
    // function bookPage() {
    //     fetchLibraryApi()
    // }
    fetchLibraryApi()
    async function fetchLibraryApi() {
        const response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list", {
            method: 'GET'
        })
        const respondBody = await response.json();
        console.log(respondBody);
        buildTable(respondBody)

        function buildTable(data) {
            var table = document.getElementById("myTable")
            for (var i = 0; i < data.length; i++) {
                var row = `<tr>
                                    <td>${i + 1}</td>
                                    <td>${data[i].datePublished}</td>
                                    <td>${data[i].isbn}</td>
                                    <td>${data[i].overdueFee}</td>
                                    <td>${data[i].publisher}</td>
                                    <td>${data[i].title}</td>
                                   </tr>`
                table.innerHTML += row
            }
            //data[i].bookId
        }


    }
    var addBook = document.getElementById("add")
};