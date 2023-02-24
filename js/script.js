/*require = require('esm')(module)
module.exports = require('./app.js')
/*export const apiData = {
    url: 'http://localhost:3000/api/',
    table : 'products'
    
}

/*export function GetData(callback, url = apiData.url + apiData.table)
{
    fetch(url)
    .then(data => data.json())
    .then(data =>{
        callback(data);
    }) 
}*/

//fetch("http://localhost:3000/api/products")
//.then((reponse) => reponse.json())
//.then( (products) => {
	//addArticle(products);
//});

fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((products) => {
    for (let product of products){
        addArticlebis(product);
    }
    //addArticle(products);
    //console.log(products);
  })
  .catch(function (err) {
    //console.log("erreur")
  });

    function addArticlebis(article) {
        const items = document.getElementById("items");
        
            items.innerHTML += `
            <a href="./product.html?id=${article._id}">
                <article>
                    <img src=${article.imageUrl} alt="${article.altTxt}"/>         
                        <h3> ${article.name}</h3>
                    <p>${article.description}</p>
                </article>
            </a>`;
        }
