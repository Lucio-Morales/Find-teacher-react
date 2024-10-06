import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const usePageSection = () => {
  const { pathname } = useLocation();

  const section = useMemo(() => pathname.split('/')[2], [pathname]);

  return section;
};

export default usePageSection;
