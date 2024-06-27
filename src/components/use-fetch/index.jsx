import { useEffect, useState } from "react";

export default function useFetch( url, options = {} ) {
  const [data, setData] = useState(null);
  const [pending, setpending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setpending(true);
    try {
      const res = await fetch(url, { ...options });
      if (!res.ok) throw new Error(res.statusText);

      const result = await res.json();
      setData(result);
      setError(null);
      setpending(false);
    } catch (error) {
      setError(`${error}. Some error occured`);
      setpending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}
