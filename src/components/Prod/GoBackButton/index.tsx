import { Link } from 'react-router-dom';
import styled from 'styled-components';

import IconBack from 'components/common/IconBack';

const GoBackButton = (): JSX.Element | null => {
  const isVisible = window.location.pathname === '/prod';

  return isVisible ? (
    <Link to="/">
      <GoBackButtonWrapper>
        <IconBack />
        Go back to builder
      </GoBackButtonWrapper>
    </Link>
  ) : null;
};

export default GoBackButton;

const GoBackButtonWrapper = styled.div`
  align-items: center;
  background: #d40c0c;
  border-radius: 3px;
  bottom: 20px;
  display: flex;
  font-weight: bolder;
  padding: 20px 30px;
  position: fixed;
  right: 20px;

  svg {
    height: 12px;
    margin-right: 10px;
    width: 12px;
  }

  &:hover {
    background: #ef3535;
  }

  a & {
    color: white;
  }
`;
