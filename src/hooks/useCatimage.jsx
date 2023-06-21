import { useEffect, useState } from "react";

const palabra = "No se encontraron peliculas para esta busqueda";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
export function useCatimage() {
  // eslint-disable-next-line no-unused-vars
  const [URL, setURL] = useState("");
  useEffect(() => {
    const busqueda = async () => {
      const res = await fetch(
        `https://cataas.com/cat/says/${palabra}?size=50&color=red&json=true`
      );
      const respuesta = await res.json();
      const { url } = await respuesta;

      await setURL(`${CAT_PREFIX_IMAGE_URL}${url}`);
    };
    busqueda();
  }, []);
  return { URL };
}
