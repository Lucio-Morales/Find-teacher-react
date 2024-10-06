import { Link } from 'react-router-dom';
import { PageNavigationItemProps } from './types';
import { PageNavItem } from './styles';

const Item = ({ data, currentSection }: PageNavigationItemProps) => {
  return (
    <Link style={{ all: 'unset' }} to={data.path}>
      <PageNavItem>{data.title}</PageNavItem>
    </Link>
  );
};

export default Item;
