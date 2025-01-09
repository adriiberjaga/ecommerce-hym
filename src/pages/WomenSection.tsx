import Rebajas from "../components/Rebajas";
import ApiComponentWomen from "../components/ApiComponentWomen";
import CarruselComponent from "../components/CarruselComponent";

export default function WomenSection() {
  const imagenes1 = [
    'https://picsum.photos/1200/600?random=12',
    'https://picsum.photos/1200/600?random=21',
    'https://picsum.photos/1200/600?random=32',
  ];
  return (
    <>
        <Rebajas/>
                <CarruselComponent images={imagenes1} />
        
      <ApiComponentWomen/>
    </>
  );
}
