export function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Add to cart</button>
    </div>
  );
}
