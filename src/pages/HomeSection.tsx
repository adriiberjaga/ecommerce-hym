import { useEffect } from 'react';
import ImagesComponentHome from '../components/ImagesComponentHome';
import Rebajas from '../components/Rebajas';

export default function HomeSection() {
    
    useEffect(() => {
        const hasSeenAlert = sessionStorage.getItem('hasSeenAlert');
        if (!hasSeenAlert) {
          alert('¡Es posible que algunas imagenes no carguen, ya que utilizo una api gratuita y esta puede no funcionar, o cargar demasiado lenta!');
          sessionStorage.setItem('hasSeenAlert', 'true');
        }
      }, []);    
      
      return(
        <>
         <Rebajas/>
         <ImagesComponentHome />
        </>

    )
}