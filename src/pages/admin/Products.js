import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = "https://hindustan-site-2.onrender.com";

  async function fetchProducts() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${API_BASE}/products`);
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function deleteProduct(id) {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`https://hindustan-site-2.onrender.com/products/${id}`, {
        method: "DELETE"
      });

      const data = await res.json();

      alert(data.message);

      setProducts(prev => prev.filter(p => p._id !== id));

    } catch (err) {
      alert("Delete failed");
      console.error(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

  return (
    <div style={containerStyle}>
      <h1>Manage Products</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr style={headerStyle}>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Brand</th>
              <th style={cellStyle}>Category</th>
              <th style={cellStyle}>Price</th>
              <th style={cellStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id} style={rowStyle}>
                <td style={cellStyle}>{p.name}</td>
                <td style={cellStyle}>{p.brand}</td>
                <td style={cellStyle}>{p.category}</td>
                <td style={cellStyle}>${p.price}</td>
                <td style={cellStyle}>
                  <Link
                    to={`/admin/edit-product/${p._id}`}
                    style={linkStyle}
                  >
                    Edit
                  </Link>
                  {" | "}
                  <button
                    onClick={() => deleteProduct(p._id)}
                    style={buttonStyle}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const containerStyle = {
  padding: "20px",
  background: "white",
  borderRadius: "10px"
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px"
};

const headerStyle = {
  background: "#0b3d91",
  color: "white"
};

const cellStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "left"
};

const rowStyle = {
  borderBottom: "1px solid #ddd"
};

const linkStyle = {
  color: "#0b3d91",
  textDecoration: "none",
  fontWeight: "bold",
  cursor: "pointer"
};

const buttonStyle = {
  background: "#ff4d4d",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
  marginLeft: "8px"
};

export default AdminProducts;
