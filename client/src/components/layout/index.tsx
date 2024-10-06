import { PropsWithChildren } from 'react';
import PrivateLayout from './PrivateLayout';

const Layout = ({ children }: PropsWithChildren) => {
  const auth = true;
  if (auth) {
    return <PrivateLayout>{children}</PrivateLayout>;
  }
};

export default Layout;
