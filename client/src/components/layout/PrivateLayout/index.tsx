import { PropsWithChildren } from 'react';
import Navbar from './Navbar';
import { NavigationPane, WithNavLayout } from './styles';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <WithNavLayout>
        <NavigationPane>
          <div id="fixedNav">
            <Navbar />
          </div>
        </NavigationPane>
        {children}
      </WithNavLayout>
    </>
  );
};

export default MainLayout;
