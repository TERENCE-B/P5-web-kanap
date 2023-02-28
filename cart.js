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
//var templateProduct = document.getElementsByClassName("cart__item")[0];
//var lastProduct = templateProduct;
//if (cart != null)
(
  cart.forEach (element => {
    fetch("http://localhost:3000/api/products/"+element)
    .then((response) => response.json())
    .then((product) => {
      //var newProduct = templateProduct.cloneNode(true);
      //lastProduct.parentNode.insertBefore(newProduct, lastProduct);
      //lastProduct = newProduct;
      if ('content' in document.createElement('template')) {
        const cart = document.querySelector("#cart")
        const img = document.querySelector("#cart__item__img");
        const description = document.querySelector("#content__description");
        const clone = template.content.cloneNode(true);
        template.appendChild(clone);
      }
    })
  })
)

//function LignePanier (code, qte, prix)
//{
  //this.codeArticle = code;
  //this.qteArticle = qte;
  //this.prixArticle = prix;
  //this.ajouterQte = function(qte)
  //{
      //this.qteArticle += qte;
  //}
  //this.getPrixLigne = function()
  //{
      //var resultat = this.prixArticle * this.qteArticle;
      //return resultat;
  //}
  //this.getCode = function() 
  //{
      //return this.codeArticle;
  //}
//}

//function Panier()
//{
    //this.liste = [];
    //this.ajouterArticle = function(code, qte, prix)
    //{ 
        //var index = this.getArticle(code);
        //if (index == -1) this.liste.push(new LignePanier(code, qte, prix));
        //else this.liste[index].ajouterQte(qte);
    //}
    //this.getPrixPanier = function()
    //{
        //var total = 0;
        //for(var i = 0 ; i < this.liste.length ; i++)
            //total += this.liste[i].getPrixLigne();
        //return total;
    //}
    //this.getArticle = function(code)
    //{
        //for(var i = 0 ; i <this.liste.length ; i++)
            //if (code == this.liste[i].getCode()) return i;
        //return -1;
    //}
    //this.supprimerArticle = function(code)
    //{
        //var index = this.getArticle(code);
        //if (index > -1) this.liste.splice(index, 1);
    //}
//}