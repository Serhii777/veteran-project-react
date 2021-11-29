import { useState, useEffect, useCallback } from "react";
import { getAllItems } from "./useFetchResultwork";

function useFetch(query, pageNum, pageSize, url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  let [count, setCount] = useState(0);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);

      if (pageNum <= count) {
        await getAllItems(url, pageNum, pageSize).then((response) => {
          const { resultworkitems, lengthWorkitems } = response;

          setCount(lengthWorkitems);
          setList((list) => {
            return [...new Set([...list, ...resultworkitems])];
          });
        });
      }

      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [pageNum, pageSize, url]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, pageSize]);

  return { loading, error, list, count };
}

export default useFetch;
