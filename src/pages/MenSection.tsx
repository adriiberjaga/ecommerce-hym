import ApiComponentMen from "../components/ApiComponentMen";
import CarruselComponent from "../components/CarruselComponent";
import Rebajas from "../components/Rebajas";
export default function MenSection() {
  const imagenes1 = [
    'https://picsum.photos/1200/600?random=1',
    'https://picsum.photos/1200/600?random=2',
    'https://picsum.photos/1200/600?random=3',
  ];

  return (
    <>
      <Rebajas />
        <h3 className="text-center mt-40 mb-24 text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Productos más destacados de esta semana
        </h3>
        <CarruselComponent images={imagenes1} />
      <ApiComponentMen />
    </>
  );
}
