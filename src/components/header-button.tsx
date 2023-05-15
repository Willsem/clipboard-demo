import { Button } from '@chakra-ui/react';
import { FC, ReactElement, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  path: string;
  icon: ReactElement;
  children?: ReactNode;
}

export const HeaderButton: FC<Props> = ({ path, icon, children }) => {
  const location = useLocation();

  return (
    <Link to={path}>
      <Button
        leftIcon={icon}
        colorScheme="blue"
        variant="ghost"
        isActive={location.pathname === path}
      >
        {children}
      </Button>
    </Link>
  );
};
