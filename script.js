const card = document.getElementById("card");

async function getData() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

(async () => {
  const products = await getData();
  products.forEach(product => {
    const sub = document.createElement("div");
    sub.className = "bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow";
    sub.innerHTML = `
      <img class="w-full h-48 object-cover rounded-md mb-4" src="${product.image}" alt="${product.title}">
      <h2 class="text-gray-800 font-semibold text-lg mb-2">${product.title}</h2>
      <p class="text-gray-600 text-sm">$${product.price}</p>
    `;
    card.appendChild(sub);
  });
})();