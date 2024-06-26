import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import styled from 'styled-components';

// import Clippy from '../Clippy/Clippy';

import { AppBar, Button, Toolbar } from 'react95';

import GearsIcon from '../../assets/img/emblem-system.png';
import WorldIcon from '../../assets/img/worldIcon.png';
import UserIcon from '../../assets/img/avatar-default.png';
import HomeIcon from '../../assets/img/homeIcon.png';
import MoneyIcon from '../../assets/img/money.png';
import ShakeIcon from '../../assets/img/shake.png';

type Props = RouteComponentProps<{}>;

const NavBar = (props: Props) => {
  const currentLocation = props.location.pathname;
  return (
    <Nav position="fixed">
      <SToolbar>
        <SwitchButton
          active={currentLocation === '/'}
          onClick={() => props.history.push('/')}
          fullWidth
          size="lg"
        >
          <Icon src={HomeIcon} alt="icon" />
        </SwitchButton>
        <SwitchButton
          active={currentLocation.startsWith('/wallet')}
          onClick={() => props.history.push('/wallet')}
          fullWidth
          size="lg"
        >
          <Icon
            style={{ height: 21, opacity: 0.9 }}
            src={ShakeIcon}
            alt="icon"
          />
        </SwitchButton>
        {/* <SwitchButton
          active={currentLocation === '/news'}
          onClick={() => props.history.push('/news')}
          fullWidth
          size="lg"
        >
          <Icon src={WorldIcon} alt="icon" />
        </SwitchButton> */}
        <SwitchButton
          active={currentLocation === '/settings'}
          onClick={() => props.history.push('/settings')}
          fullWidth
          size="lg"
        >
          <Icon src={GearsIcon} alt="icon" style={{ height: 30 }} />
        </SwitchButton>
      </SToolbar>
      {/* <Clippy /> */}
    </Nav>
  );
};

export default withRouter(NavBar);

const Nav = styled(AppBar)`
  top: auto;
  bottom: 0;
  z-index: 2;
  bottom: var(--safe-area-inset-bottom);
`;
const Icon = styled.img`
  /* image-rendering: pixelated; */
  filter: grayscale(1);
  height: 24px;
`;

const SwitchButton = styled(Button)`
  margin: 0 1px;
`;
const SToolbar = styled(Toolbar)`
  margin: 0 -1px;
`;
