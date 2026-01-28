import { useEffect, useState } from "react";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      const res = await fetch("https://hindustan-site-2.onrender.com/products");
      if (!res.ok) throw new Error("Failed to fetch products");

      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load products. Check backend.");
    } finally {
      setLoading(false);
    }
  }

  async function deleteProduct(id) {
    if (!window.confirm("Delete this product?")) return;

    try {
      await fetch(`https://hindustan-site-2.onrender.com/products/${id}`, {
        method: "DELETE"
      });

      fetchProducts();
    } catch (err) {
      alert("Delete failed");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>All Products</h1>

      <div style={{ overflowX: "auto" }}>
        <table style={table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td>
                  <img
                    src={p.images?.[0] || p.image}
                    alt=""
                    style={{ width: "60px", height: "60px", objectFit: "contain" }}
                  />
                </td>
                <td>{p.name}</td>
                <td>{p.brand}</td>
                <td>{p.category}</td>
                <td>
                  <button style={editBtn}>Edit</button>
                  <button style={deleteBtn} onClick={() => deleteProduct(p._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {products.length === 0 && <p>No products found.</p>}
      </div>
    </div>
  );
}

const table = {
  width: "100%",
  borderCollapse: "collapse",
  background: "white",
  borderRadius: "10px",
  overflow: "hidden"
};

const editBtn = {
  background: "#0b3d91",
  color: "white",
  border: "none",
  padding: "6px 10px",
  borderRadius: "5px",
  marginRight: "8px",
  cursor: "pointer"
};

const deleteBtn = {
  background: "#ff4d4d",
  color: "white",
  border: "none",
  padding: "6px 10px",
  borderRadius: "5px",
  cursor: "pointer"
};

export default AdminProducts;
