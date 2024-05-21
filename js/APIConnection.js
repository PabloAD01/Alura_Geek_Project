async function fetchProducts() {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  console.log("GET PRODUCTS", data);
  return data;
}

async function sendProduct(name, price, image) {
  const response = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      price: price,
      image: image,
    }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create product");
  }

  console.log("POST PRODUCTS", data);

  return data;
}

async function deleteProduct(id) {
  const response = await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log("DELETE PRODUCTS", data);
  return data;
}

export const APIConnection = {
  fetchProducts,
  sendProduct,
  deleteProduct,
};
