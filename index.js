/*

    To start using this framework, please require it as a script in your html code.
    Like this :
    <script src="[pathToTheFramework]/index.js"></script>

    INCLUDE THE JAVASCRIPT FILE BEFORE THE BODY !!

*/

async function changePage(pageUrl) {
    let newPage = await (await fetch(pageUrl)).text()
    document.innerHTML(newPage)   
}