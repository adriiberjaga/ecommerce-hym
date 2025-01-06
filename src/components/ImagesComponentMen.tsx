// if api components not found..

export type ImagesResponse = {
  id: number;
  name: string;
  image: string;

}
const products = [
  {
    id: 1,
    name: "Product 1",
    Image: "https://via.placeholder.com/1"
  },
  {
    id: 2,
    name: "Product 2",
    Image: "https://via.placeholder.com/50"
  },
  {
    id: 3,
    name: "Product 3",
    Image: "https://via.placeholder.com/15"
  },
  {
    id: 4,
    name: "Product 4",
    Image: "https://via.placeholder.com/10"
  },
]
export default function ImagesComponent() {
  return (
    <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.Image} alt={product.name} />
          </div>
        ))}
    </div>
  )
}
