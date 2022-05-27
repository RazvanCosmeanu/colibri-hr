import { useEffect, useState } from 'react';
import statsService from '../../services/statsService';

const useStats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    statsService.fetchSeries().then(setData);
  }, []);

  return {
    data,
  };
};

export default useStats;
