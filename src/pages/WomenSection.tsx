import styles from "./WomenSection.module.css";
import ApiComponent from "../components/ApiComponent";
import Rebajas from "../components/Rebajas";

export default function WomenSection() {
  // Define los IDs que quieres mostrar
  const selectedIds = [1, 20, 40, 43, 2, 22, 42, 3, 23];

  return (
    <>
        <Rebajas/>
    
      <ApiComponent>
        {(data) => (
          <div className={styles.womenSection}>
            {data
              .filter((product) => {
                // Filtra por categoría y por los IDs seleccionados
                console.log(product.category.name);  
                return  selectedIds.includes(product.id);
              })
              .map((product) => (
                <div key={product.id} className={styles.womenSectionProduct}>
                  <img className={styles.womenSectionProductImage} src={product.category.image} alt={product.name} />
                  <p>{product.name}</p>
                </div>
              ))}
          </div>
        )}
      </ApiComponent>
    </>
  );
}
