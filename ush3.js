const items = document.querySelector(".items");
const itemsCount = document.querySelector(".items-count");
const itemsData = [
  {
    name: "RTX 3090",
    price: 1500,
    description: "The GeForce RTX™ 3090 is a big ferocious GPU (BFGPU) with TITAN class performance. It’s powered by Ampere—NVIDIA’s 2nd gen RTX architecture—doubling down on ray tracing and AI performance with enhanced Ray Tracing (RT) Cores, Tensor Cores, and new streaming multiprocessors. Plus, it features a staggering 24 GB of G6X memory, all to deliver the ultimate gaming experience.",
  },
  {
    name: "RTX 3080",
    price: 700,
    description: "The GeForce RTX™ 3080 Ti and RTX 3080 graphics cards deliver the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. They are built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.",
  },
  {
    name: "RTX 3070",
    price: 500,
    description: "The GeForce RTXTM 3070 Ti and RTX 3070 graphics cards are powered by Ampere—NVIDIA’s 2nd gen RTX architecture. Built with enhanced Ray Tracing Cores and Tensor Cores, new streaming multiprocessors, and high-speed memory, they give you the power you need to rip through the most demanding games.",
  },
  {
    name: "RTX 3060",
    price: 330,
    description: "The GeForce RTX™ 3060 Ti and RTX 3060 lets you take on the latest games using the power of Ampere—NVIDIA’s 2nd generation RTX architecture. Get incredible performance with enhanced Ray Tracing Cores and Tensor Cores, new streaming multiprocessors, and high-speed G6 memory.",
  }
];

let cartState = 0;
let cartItems = [];

for(let i=0; i<itemsData.length; i++){
    items.innerHTML += `
        <div class="card mx-4" style="width: 18rem;">
            <img class="card-img-top" src="https://via.placeholder.com/200x150?text=${itemsData[i].name}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${itemsData[i].name}</h5>
              <h5 class="card-title">$${itemsData[i].price}</h5>
              <p class="card-text">${itemsData[i].description}</p>
              <a href="#" class="btn btn-primary" onclick="addProductToCart(${i})">Add to cart</a>
            </div>
          </div>
    `
}

function addProductToCart(index){
    if(cartItems.includes(index)) return
    cartItems.push(index);
    cartState += 1;
    itemsCount.textContent = cartState;
}