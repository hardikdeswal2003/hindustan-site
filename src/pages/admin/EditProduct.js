import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    fetch(`https://hindustan-site-2.onrender.com/products/${id}`)
      .then(res => res.json())
      .then(data => setForm(data));
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await fetch(`https://hindustan-site-2.onrender.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      alert("Product updated");
      navigate("/admin/products");
    } catch (err) {
      alert("Update failed");
    }
  }

  if (!form) return <h2>Loading...</h2>;

  return (
    <div style={box}>
      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input name="name" value={form.name} onChange={handleChange} />
        <input name="brand" value={form.brand} onChange={handleChange} />
        <input name="category" value={form.category} onChange={handleChange} />
        <input name="price" value={form.price} onChange={handleChange} />
        <input name="image" value={form.image} onChange={handleChange} />
        <textarea name="description" rows="4" value={form.description} onChange={handleChange} />

        <button>Update Product</button>
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

export default EditProduct;
