import { useNavigate } from 'react-router-dom';
import { Educapp } from './styles';

interface IProps {
  justify: 'center' | 'flex-end' | 'flex-start' | undefined;
  size?: string;
}

const ResponsiveLogo = ({ justify, size }: IProps) => {
  const navigate = useNavigate();

  return (
    <Educapp size={size} justify={justify}>
      <div className="full" onClick={() => navigate('/')}>
        educapp
      </div>
      <div className="small" onClick={() => navigate('/')}>
        e
      </div>
    </Educapp>
  );
};

export default ResponsiveLogo;
