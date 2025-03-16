import { useParams } from "react-router-dom"

const products = [
  {
    id: 4,
    name: "asdasd"
  },
  {
    id: 5,
    name: "ASDASDASD"
  },
  {
    id: 7,
    name: "ieiwieaiiae"
  },
]

export function SingleProduct() {
  const { id } = useParams();
  const product = products.filter(prod => {
    if (prod.id.toString() === id) return prod;
  })

  return (
    <>
      { products ? product.map(prod => {
        return (
          <>
            <p>{prod.id}</p>
            <p>{prod.name}</p>
          </>
        )
      }) : "ID Not Found"}
    </>
  )
}