//<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">//
                //<div class="cart__item__img">
                  //<img src="../images/product01.jpg" alt="Photographie d'un canapé">
                //</div>
                //<div class="cart__item__content">
                  //<div class="cart__item__content__description">
                    //<h2>Nom du produit</h2>
                    //<p>Vert</p>
                    //<p>42,00 €</p>
                  //</div>
                  //<div class="cart__item__content__settings">
                    //<div class="cart__item__content__settings__quantity">
                      //<p>Qté : </p>
                      //<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    //</div>
                    //<div class="cart__item__content__settings__delete">
                      //<p class="deleteItem">Supprimer</p>
                    //</div>
                  //</div>
                //</div>
              //</article> -->
var cart = JSON.parse(sessionStorage.getItem("cart"));
//console.log(cart)
var templateProduct = document.getElementsByClassName("cart__item")[0];
var lastProduct = templateProduct;
if (cart != null)
(
  cart.forEach (element => {
    fetch("http://localhost:3000/api/products/"+element)
    .then((response) => response.json())
    .then((product) => {
      var newProduct = templateProduct.cloneNode(true);
      lastProduct.parentNode.insertBefore(newProduct, lastProduct);
      lastProduct = newProduct;
    }) 
  })
)


