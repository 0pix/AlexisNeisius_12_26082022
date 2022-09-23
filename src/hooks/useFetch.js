import { useEffect, useState } from 'react';

/**
 * Hooks to get data from Api or from mock of the user
 *
 * @param url  endpoints of the data from the API
 * @param mock Boolean, set on true to use the mock
 * @param dataMock data from mock
 * @param id number, id from the current user
 *
 * @return { data, error }
 * @author Alexis.N
 * @version 1.0
 */

export const useFetch = (url, mock, dataMock, id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const mockBoolean = mock;

  const fetchData = () => {
    console.log(id.id);
    console.log(dataMock[0]);

    if (mockBoolean === false) {
      fetch(url)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setData(data.data);
        })
        .catch(function (err) {
          console.log(err, ' error');
          setError(err);
        });
    } else {
      setData(dataMock[id.id === '12' ? '0' : '1']);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error };
};
