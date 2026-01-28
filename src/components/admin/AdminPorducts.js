import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function loadProducts() {
    try {
      const res = await fetch("https://hindustan-site-2.onrender.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.error("Load error", err);
      setLoading(false);
    }
  }

  async function deleteProduct(id) {
    if (!window.confirm("Delete this product?")) return;

    try {
      const res = await fetch(
        `https://hindustan-site-2.onrender.com/admin/products/${id}`,
        { method: "DELETE" }
      );

      const data = await res.json();
      alert(data.message);

      // 🔥 refresh list after delete
      loadProducts();

    } catch (err) {
      console.error("Delete error", err);
      alert("Delete failed");
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) return <h2>Loading products...</h2>;

  return (
    <div>
      <h1>All Products</h1>

      <table border="1" cellPadding="10" style={{ width: "100%", background: "white" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.brand}</td>
              <td>{p.category}</td>
              <td>
                <button onClick={() => navigate(`/admin/edit-product/${p._id}`)}>
                  Edit
                </button>

                <button
                  onClick={() => deleteProduct(p._id)}
                  style={{ marginLeft: "10px", background: "red", color: "white" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;
