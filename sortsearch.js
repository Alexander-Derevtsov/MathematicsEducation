 function sort(){
    let year=document.getElementById("year")
    if(year.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce()}

}

function search(){
    if(year.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce()}
}

async function getResponce() {
    let responce = await fetch("books.json")
    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 6)
    console.log(content)
    let key
    content_year=content.sort((a, b) => a.year - b.year);
    content_filter=[]
    let word=document.getElementById('search').value.toLowerCase();
    content_filter= content_year.filter((product) =>{
        return (
                    product.name.toLowerCase().includes(word) ||
                    product.author.toLowerCase().includes(word) ||
                    product.year.toString().includes(word)
                );

    });
    console.log(content_filter);
    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content_filter) {
                node_for_insert.innerHTML += `
                <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img style="width: 180px" class="align-self-center" src=${content_filter[key].img}>
                <h5 class="card-name">${content_filter[key].name}</h5>
                <p class="card-text">${content_filter[key].author}. Год издания ${content_filter[key].year} г.</p>
                <input type="hidden" name= "vendor_code" value=${content_filter[key].vendor_code}>
                </li>
                        `
            }

}

sort()