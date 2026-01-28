import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    image: "",
    description: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await fetch("https://hindustan-site-2.onrender.com/add-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      alert("Product added successfully");
      navigate("/admin/products");
    } catch (err) {
      alert("Failed to add product");
    }
  }

  return (
    <div style={box}>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input name="name" placeholder="Product Name" onChange={handleChange} required />
        <input name="brand" placeholder="Brand" onChange={handleChange} required />
        <input name="category" placeholder="Category" onChange={handleChange} required />
        <input name="price" placeholder="Price" onChange={handleChange} />
        <input name="image" placeholder="Image URL" onChange={handleChange} />
        <textarea name="description" placeholder="Description" rows="4" onChange={handleChange} />

        <button>Add Product</button>
      </form>
    </div>
  );
}

const box = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  maxWidth: "500px"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};

export default AddProduct;
