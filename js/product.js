const idUrlParams = document.location.search;

const idParams = new URLSearchParams(idUrlParams);

const leId = idParams.get("id");
console.log(leId);

fetch("http://localhost:3000/api/products/"+leId)
  .then((response) => response.json())
  .then((product) => {
    products(product);
  })  
    .catch(function (err) {
    //console.log("erreur")
  })

function products (product)
{
  console.log (product);
  
  document.querySelector("#price").innerHTML=product.price;
    for (let color of product.colors){
      let option = document.createElement("option");
      console.log(color);
      option.value = color;
      option.innerHTML = color;
      document.querySelector("#colors").appendChild(option);
    }
    const description = document.querySelector("#description");
    description.innerHTML+=`${product.description}`;
    
    const titre = document.getElementById("title");
    titre.innerHTML+=`${product.name}`;
    
    const image = document.querySelector(".item__img");
    image.innerHTML+= `<img src ="${product.imageUrl}"alt="{product.altTxt}"> `;
}
var product = window.location.href.split('=')[1];

function Ajouterpanier ()
{
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  cart.push(product);

  sessionStorage.setItem("cart", JSON.stringify(cart));
  //console.log(cart)
}
document.getElementById("addToCart").addEventListener("click",Ajouterpanier);
 