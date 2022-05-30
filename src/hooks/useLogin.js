import { useEffect, useState } from "react";
import axios from "axios";

export default function useLogin(userEmail, userPassword) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=10`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return {loading, error, data}
}
