import styled from 'styled-components';
import Menu from 'grommet/components/Menu';

export const StyledMenu = styled(Menu)`
  flex-direction: row !important;
  flex-grow: 1 !important;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledLogo = styled.img`
  max-height: 45px;
  margin-left: 6%;
`;

export const LogoPlaceholder = styled.div`
  width: 177px;
  height: 45px;
  background-color: transparent;
`;
