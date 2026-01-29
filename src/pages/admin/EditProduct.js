import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    image: "",
    description: ""
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE = "https://hindustan-site-2.onrender.com";

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${API_BASE}/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const product = await res.json();
        setForm(product);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setSaving(true);
      setError(null);

      const res = await fetch(`${API_BASE}/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error("Failed to update product");

      console.log("Product updated successfully");
      alert("Product updated successfully!");
      navigate("/admin/products");
    } catch (err) {
      console.error("Error updating product:", err);
      setError(err.message);
      alert(`Failed to update product: ${err.message}`);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <h2>Loading product...</h2>;

  return (
    <div style={box}>
      <h1>Edit Product</h1>

      {error && <div style={{ color: "red", marginBottom: "10px" }}>Error: {error}</div>}

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="brand"
          placeholder="Brand"
          value={form.brand}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          value={form.description}
          onChange={handleChange}
          style={inputStyle}
        />

        <button disabled={saving} style={buttonStyle}>
          {saving ? "Saving..." : "Update Product"}
        </button>
        <button
          type="button"
          onClick={() => navigate("/admin/products")}
          style={cancelButtonStyle}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

const box = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  maxWidth: "500px",
  margin: "0 auto"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginTop: "20px"
};

const inputStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  fontSize: "14px"
};

const buttonStyle = {
  padding: "12px",
  background: "#0b3d91",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px"
};

const cancelButtonStyle = {
  padding: "12px",
  background: "#888",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold"
};

export default EditProduct;
