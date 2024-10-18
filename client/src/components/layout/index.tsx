import { PropsWithChildren } from 'react';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';

const Layout = ({ children }: PropsWithChildren) => {
  const auth = false;
  if (auth) {
    return <PrivateLayout>{children}</PrivateLayout>;
  }
  if (!auth) {
    return <PublicLayout>{children}</PublicLayout>;
  }
};

export default Layout;
