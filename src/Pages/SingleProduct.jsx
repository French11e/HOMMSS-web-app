import { useParams } from "react-router-dom";

const products = [
  { id: 4, name: "asdasd" },
  { id: 5, name: "ASDASDASD" },
  { id: 7, name: "ieiwieaiiae" },
];

export function SingleProduct() {
  const { id } = useParams();
  const product = products.find((prod) => prod.id.toString() === id);

  return (
    <>
      {product ? (
        <>
          <p>{product.id}</p>
          <p>{product.name}</p>
        </>
      ) : (
        <p>ID Not Found</p>
      )}
    </>
  );
}
