import { useEffect } from 'react';
import { useLocation } from 'react-router';

const useScrollToTop = (element) => {
  const { pathname } = useLocation();

  useEffect(() => {
    element?.scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollToTop;
