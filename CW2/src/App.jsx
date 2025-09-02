import './App.css'
import Product from './components/Product.jsx'

function App() {
  const products = [
    {
      title: "Laptop",
      price: 500000,
      inStock: true,
      description: "The best laptop in the world!",
      rating: "⭐⭐⭐⭐⭐",
      tags: ["New", "Sale", "The best!"]
    },
    {
      title: "Laptop 1",
      price: 500000,
      inStock: true,
      description: "The best laptop in the world!",
      rating: "⭐⭐⭐⭐⭐",
      tags: ["New", "Sale", "The best!"]
    },
    {
      title: "Laptop 2",
      price: 500000,
      inStock: true,
      description: "The best laptop in the world!",
      rating: "⭐⭐⭐⭐⭐",
      tags: ["New", "Sale", "The best!"]
    }
  ]

  return (
    <>
      {products.map(product => (
        <Product
          key={product.title}
          title={product.title}
          price={product.price}
          inStock={product.inStock}
          description={product.description}
          rating={product.rating}
          tags={product.tags}
        />
      ))}
    </>
  )
}

export default App
