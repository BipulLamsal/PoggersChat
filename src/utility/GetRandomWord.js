import { useEffect, useState } from "react";

const GetRandomWord = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false);
        setError("Error fetching the word");
      });
  }, [url]);
  return { data, loading, error };
};

export default GetRandomWord;
