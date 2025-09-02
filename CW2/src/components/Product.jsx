import './Product.css'

function Product({ title, price, inStock, description, rating, tags = [] }) {
  const finalPrice = tags.includes("Sale")
    ? price - price * 0.1
    : price

  return (
    <div className="product_card">
      <h1>{title}</h1>
      <p>{inStock ? `${finalPrice}₸` : "Out of stock"}</p>
      <p>{description}</p>
      <p>{rating}</p>
      <ul>
        {tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
    </div>
  )
}

export default Product
