import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Programming']);

  const onAddCategory = value => {

    // Si la categoria ya existe retorna.
    if(categories.includes(value)) return;

    /*
      Hago una copia de las categorias con el spread operator y
      seguido agrego el nuevo elemento, en este caso 'Akame ga Kill'
    */

    const copyCategories = [value, ...categories];
    
    return setCategories(copyCategories);

    /*
      Otra forma de hacerlo seria asi:
      setCategories([...categories, 'Akame ga Kill'])
    */
  }

  return (
    <>
    {/* Titulo */}
      <h1 style={{textAlign: 'center'}}>Buscar gif</h1>
    
    {/* Input */}
    <AddCategory onNewCategory={onAddCategory}/>
    {/* Listado de Gif */}
    <ol>
      {categories.map((category) => (
          <GifGrid key={category} category={category}/>
        )
      )}
      {/* <li>abc</li> */}
    </ol>
        {/* Gif Item */}
    </>
  )
}
