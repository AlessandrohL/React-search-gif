
export const getGifs = async (category) => {
  const API_KEY = 'huGa5FpZ92GclEkyc3ov0rD61B8kpdJf'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10&lang=en`;
  // espero la respuesta
  const res = await fetch(url);
  // destructuro y guardo la variable data de la respuesta en json.
  const {data} = await res.json();
  // Por cada gif guardara un obj y finalmente devolvera un array.
  const gifs = data.map(gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url
  }))

  console.log(gifs);
  return gifs;
}