window.onload = function () {
    const display = document.querySelector('#outlet');
    fetchLibraryApi()
    async function fetchLibraryApi() {
        const response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list", {
            method: 'GET'
        })//data[i].bookId
        const respondBody = await response.json();
        console.log(respondBody);
        buildTable(respondBody)
        function buildTable(data) {
            var table = document.getElementById("myTable")
            for (var i = 0; i < data.length; i++) {
                var row = `<tr>
                                    <td>${i + 1}</td>                                   
                                    <td>${data[i].isbn}</td>
                                    <td>${data[i].title}</td>
                                    <td>${data[i].overdueFee}</td>
                                    <td>${data[i].publisher}</td>                                    
                                    <td>${data[i].datePublished}</td>
                                    
                                    <td><a  href='book.html' onclick='editBookForm(${data[i].bookId})'>edit</a></td>
                                    <td ><button onclick='bookDelete(${data[i].bookId})'>delete</button></td>
                                   </tr>`
                table.innerHTML += row
            }
        }

    }

};