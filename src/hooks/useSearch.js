import { useState, useEffect, useRef } from "react";
export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una película vacía");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar con solo numeros");
      return;
    }
    if (search.length < 3) {
      setError("Debe ingresar al menos 3 Caracteres");
      return;
    }
    setError(null);
  }, [search]);
  return { search, updateSearch, error };
}
