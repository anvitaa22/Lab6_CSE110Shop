// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  let objs = { items:[],};

  let store = localStorage.getItem("objs.items");
  if(store){
    objs.items = JSON.parse(store);
    addShopItems(objs.items);
  }
  else{
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then((data) => {
          let serial = JSON.stringify(data);
          localStorage.setItem("objs.items", serial);
          objs.items = data;
          addShopItems(objs.items);
      });
  }
});

  function addShopItems(items) {

    let elements = []
    items.forEach((item) => {
      let e = document.createElement("product-item");
      e.setAttribute("image-src", item.image);
      e.setAttribute("title", item.title);
      e.setAttribute("price", "$" + item.price);
      e.setAttribute("product-id", "$" + item.price);
      elements.push(e);
    });
  
    elements.forEach((e) => {
      document.getElementById("product-list").appendChild(e)
    });

  }