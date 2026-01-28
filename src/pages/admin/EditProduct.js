import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProducts() {
    const res = await fetch("https://hindustan-site-2.onrender.com/products");
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  }

  async function deleteProduct(id) {
    if (!window.confirm("Delete this product?")) return;

    await fetch(`https://hindustan-site-2.onrender.com/products/${id}`, {
      method: "DELETE"
    });

    fetchProducts();
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <h2>Loading products...</h2>;

  return (
    <div>
      <h1>Products</h1>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.brand}</td>
              <td>{p.price}</td>
              <td>
                <Link to={`/admin/edit-product/${p._id}`}>Edit</Link>
                {" | "}
                <button onClick={() => deleteProduct(p._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;
