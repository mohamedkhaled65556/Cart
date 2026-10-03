let span = document.querySelector("#TotalCost");
let length = document.querySelector("#Length");
let productArea = document.querySelector("#productArea");
products = JSON.parse(localStorage.getItem("products")) || [];
cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartContainer = document.querySelector("#cartContainer");

const showProducts = () => {
  productArea.innerHTML = ``;
  products.forEach((el, index) => {
    productArea.innerHTML += `<div class="border rounded-3 p-2">
    <img src="${el.imgUrl}" class="card-img-top" style="height:200px; object-fit: contain;"/>    
    <div class="card-body">
          <h3 class="card-title text-center p-2">Name : ${el.name}</h3>
          <h5 class="card-text text-center">
            Price : ${el.price} USD
          </h5>
          <p class="card-text text-center">
            Total Qty : ${el.totalQty}
          </p>
          <a onclick="addToCart(${index})" class="btn btn-primary col-12" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight">Add To Cart</a>
        </div>
        </div>`;
  });
};

const addToCart = (index) => {
  let indexInCart = cart.findIndex((el) => {
    return el.name == products[index].name;
  });

  if (indexInCart == -1) {
    let product = products[index];
    product.qty = 1;
    cart.push(product);
  } else {
    Increase(indexInCart);
    return;
  }
  showCart();
  localStorage.setItem("cart", JSON.stringify(cart));
};

const showCart = () => {
  cartContainer.innerHTML = "";
  cart.forEach((el, index) => {
    cartContainer.innerHTML += `
    <div class="d-flex justify-content-between align-items-start border-bottom">
    
    <img src="${el.imgUrl}" 
    class="card-img-top" 
    style="width:100px; object-fit:contain">
    
    <div class="card-body">
    
    <h5 class="card-title text-center p-2">
    Name : ${el.name}
    </h5>
    
    <p class="card-text text-center">
            Price : ${el.price * el.qty} USD
            </p>
            
            <div class="d-flex justify-content-center align-items-center gap-3">

            <button 
            class="btn btn-success" 
              onclick="Increase(${index})">
              +
              </button>
              
            <p style="margin-top:10px">
            Qty : ${el.qty}
            </p>
            
            <button 
              class="btn btn-danger" 
              onclick="Decrease(${index})">
              -
            </button>

          </div>
          
          </div>
          </div>
          `;
  });
  calcTotal();
  length.innerHTML = cart.length;
};

const Increase = (index) => {
  if (cart[index].qty < cart[index].totalQty) {
    cart[index].qty++;
  } else {
    alert(`This product have qty ${cart[index].totalQty}`);
  }

  showCart();
  localStorage.setItem("cart", JSON.stringify(cart));
};

const Decrease = (index) => {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  } else {
    cart.splice(index, 1);
  }

  showCart();
  localStorage.setItem("cart", JSON.stringify(cart));
};

const calcTotal = () => {
  let total = 0;
  cart.forEach((el, index) => {
    total += el.price * el.qty;
  });
  span.innerHTML = total;
};

showCart();
showProducts();
