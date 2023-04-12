import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        // Si isLoading es true, devuelve el segundo valor
        // renderiza el h2, si es falsa devuelve false y no
        // hace nada
        isLoading && <h2>Cargando...</h2>
      }
      <div className="card-grid">
        {
          gifs.map(gif => (
            <GifItem 
              key={gif.id}
              image={gif.url}
              title={gif.title}
              />
          ))
        }
      </div>
    </>
  )
}
