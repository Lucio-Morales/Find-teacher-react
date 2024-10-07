import { IconType } from 'react-icons';
import { IconBox } from './styles';

interface IProps {
  icon: IconType;
  size: string;
  active?: boolean;
  color?: string;
}

const RegularIcon = ({
  size,
  active,
  icon: IconElement,
  color,
  ...rest
}: IProps) => {
  return (
    <IconBox size={size} active={active} {...rest}>
      <IconElement size={size} color={color ? color : undefined} />
    </IconBox>
  );
};

export default RegularIcon;
