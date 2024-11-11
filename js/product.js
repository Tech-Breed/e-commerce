// var MainImg = document.getElementById("MainImg");
//   var smallimg = document.getElementsByClassName("small-img");

// smallimg[0].onclick = function(){
//   MainImg.src = smallimg[0].src;
// }

// smallimg[1].onclick = function(){
//   MainImg.src = smallimg[1].src;
// }

// smallimg[2].onclick = function(){
//   MainImg.src = smallimg[2].src;
// }

// smallimg[3].onclick = function(){
//   MainImg.src = smallimg[3].src;
// }
  
//   smallimg[4].onclick = function(){
//   MainImg.src = smallimg[4].src;
// }
    

const products = [
  {
    id: 1,
    title: "Product Title",
    price: "$99.99",
    image: "./images/female.png",
    description: "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. fabric constructed from 100% cotton...",
    category: "Home/T-shirt"
  },

  {
    id: 2,
    title: "Pale Blue T-shirt",
    price: "$78",
    image: "https://i.postimg.cc/hG1hqqK6/n1.jpg",
    description: "A modern blue T-shirt made with high-quality fabric, perfect for casual wear.",
    category: "Men/T-shirt"
  },
  
  {
    id: 3,
    title: "Plain Grey T-shirt",
    price: "$78",
    image: "https://i.postimg.cc/BZkSkvxt/n2.jpg",
    description: "A comfortable grey T-shirt for everyday wear.",
    category: "Men/T-shirt"
  },
  {
    id: 4,
    title: "Plain White T-shirt",
    price: "$78",
    image: "https://i.postimg.cc/KYjcC3sk/n3.jpg",
    description: "A classic white T-shirt, versatile and timeless.",
    category: "Men/T-shirt"
  },
  {
    id: 5,
    title: "Blue Jean T-shirt",
    price: "$78",
    image: "https://i.postimg.cc/908J8S4q/n5.jpg",
    description: "A trendy blue jean T-shirt with a rugged look.",
    category: "Men/T-shirt"
  }
];

// Function to load product details based on URL parameter
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"), 10);

  // Find product by ID
  const product = products.find((item) => item.id === productId);

  if (product) {
    // Populate product details
    document.getElementById("MainImg").src = product.image;
    document.querySelector(".single-pro-details h4").textContent = product.title;
    document.querySelector(".single-pro-details h2").textContent = product.price;
    document.querySelector(".single-pro-details span").textContent = product.description;
    document.querySelector(".single-pro-details h6").textContent = product.category;
  } else {
    console.error("Product not found.");
  }
});
