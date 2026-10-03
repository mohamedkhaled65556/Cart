let products = [
  {
    name: "Samsung",
    price: 245,
    imgUrl:
      "https://media.istockphoto.com/id/180828118/photo/old-used-cellphones-pile.jpg?s=612x612&w=0&k=20&c=v9UdXyz7dOdz126qOTLvUFLJmZdF4M2NHNq57Tq_4Kw=",
    totalQty: 6,
  },
  {
    name: "Iphone",
    price: 258,
    imgUrl:
      "https://media.istockphoto.com/id/180828118/photo/old-used-cellphones-pile.jpg?s=612x612&w=0&k=20&c=v9UdXyz7dOdz126qOTLvUFLJmZdF4M2NHNq57Tq_4Kw=",
    totalQty: 6,
  },
  {
    name: "aHmed",
    price: 243,
    imgUrl:
      "https://media.istockphoto.com/id/180828118/photo/old-used-cellphones-pile.jpg?s=612x612&w=0&k=20&c=v9UdXyz7dOdz126qOTLvUFLJmZdF4M2NHNq57Tq_4Kw=",
    totalQty: 6,
  },
  {
    name: "Mochtar",
    price: 125,
    imgUrl:
      "https://media.istockphoto.com/id/180828118/photo/old-used-cellphones-pile.jpg?s=612x612&w=0&k=20&c=v9UdXyz7dOdz126qOTLvUFLJmZdF4M2NHNq57Tq_4Kw=",
    totalQty: 6,
  },
];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}