import usePageSection from '../../../hooks/usePageSection';
import Item from './Item';
import { PageNavigationProps } from './types';
import { Box } from './styles';

const Nav = ({ items }: PageNavigationProps) => {
  const section = usePageSection();
  return (
    <Box>
      <nav>
        {items.map((data) => (
          <Item currentSection={section} data={data} key={data.key} />
        ))}
      </nav>
    </Box>
  );
};

export default Nav;
