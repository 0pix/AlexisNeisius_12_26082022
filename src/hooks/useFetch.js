import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = () => {
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // console.log(data);
        setData(data.data);
      })
      .catch(function (err) {
        console.log(err, ' error');
        setError(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error };
};
