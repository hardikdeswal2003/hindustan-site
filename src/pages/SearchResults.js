import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function SearchResults() {
  const { query } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => {
        const q = query.toLowerCase();
        const filtered = data.filter(p =>
          p.name?.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q)
        );
        setProducts(filtered);
      });
  }, [query]);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Search results for "{query}"</h2>

      <div style={{
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
        gap: "20px"
      }}>
        {products.map(p => (
          <div 
            key={p._id}
            onClick={() => navigate(`/product/${p._id}`)}
            style={{ border:"1px solid #ddd", padding:"15px", borderRadius:"10px", cursor:"pointer" }}
          >
            <img src={p.images?.[0]} alt="" style={{ width:"100%", height:"180px", objectFit:"contain" }} />
            <h4>{p.name}</h4>
            <p>{p.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;