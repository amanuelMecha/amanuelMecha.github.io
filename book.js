
window.onload = function () {
    const display = document.querySelector('#outlet');

    bookPage();
    function bookPage() {
        // display.innerHTML = loginTemplate;
        // const loginB = document.querySelector('#login');
        fetchLibraryApi()
    }

    /*Animation page contains
    -welcome text and user location , textbox for animation, refresh button and logout button
     */
    async function fetchLibraryApi() {
        const response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list", {
            method: 'GET'
        })
        const respondBody = await response.json();
        console.log(respondBody);
        //var tbl = js.CreateTable(respondBody)
        //display.innerHTML = tbl;
        buildTable(respondBody)
        function buildTable(data) {
            var table = document.getElementById("myTable")
            for (var i = 0; i < data.length; i++) {
                var row = `<tr>
                                    <td>${data[i].bookId}</td>
                                    <td>${data[i].datePublished}</td>
                                    <td>${data[i].isbn}</td>
                                    <td>${data[i].overdueFee}</td>
                                    <td>${data[i].publisher}</td>
                                    <td>${data[i].title}</td>
                                   </tr>`
                table.innerHTML += row
            }

        }


    }
    var addBook = document.getElementById("add")
    //addBook.onclick(<li><a href="addBook.html"></a></li>)


};