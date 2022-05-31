import { useEffect, useState } from 'react';
import log from '../../lib/log';
import statsService from '../../services/statsService';

const useStats = (statsFunc) => {
  const [data, setData] = useState({ series: [], title: '' });

  useEffect(() => {
    statsService[statsFunc]().then(setData);
  }, []);

  useEffect(() => {
    log(data);
  }, [data]);

  return {
    data,
  };
};

export default useStats;
