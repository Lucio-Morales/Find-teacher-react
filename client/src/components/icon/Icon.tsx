import { IconType } from 'react-icons';
import { HoverButton, IconBox } from './styles';

interface IProps {
  size: string;
  icon: IconType;
  active?: boolean;
  color?: string;
}

const Icon = ({ size, icon: IconElement, active, color }: IProps) => {
  return (
    <HoverButton>
      <IconBox size={size} active={active}>
        <IconElement size={size} color={color} />
      </IconBox>
    </HoverButton>
  );
};

export default Icon;
