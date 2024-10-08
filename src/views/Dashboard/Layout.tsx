import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import packageJSON from '../../../package.json';

import CoinsTable from './SidesTable';

import Fullpage from '../../components/Fullpage/Fullpage';
import ButtonSwitch from '../../components/ButtonSwitch/ButtonSwitch';
import LinkButton from '../../components/LinkButton/LinkButton';

import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { CoinsData, CoinsInfo } from '../../store/reducers/coins';
import MoneyIcon from '../../assets/img/money-trans.png';
import SidesTable from './SidesTable';
// import SidesData from '../../store/sides051124.json';

const DashboardLayout = ({
  sides,
  showingFollowing,
  showFollowing,
  showTop,
}) => {
  useLockBodyScroll();
  const location = useLocation();
  const currentUrl = location.pathname + location.search;
  return (
    <Fullpage>
      <Header>
        <img
          style={{ height: 52, opacity: 0.9, padding: '5px 0 0 5px' }}
          src={MoneyIcon}
          alt="icon"
        />
        <h1>
          Sunday
          <span>Sides</span>
          <small>v{packageJSON.version}</small>
        </h1>
        {/* {!showingFollowing && (
          <LinkButton
            to={{
              pathname: '/search',
              state: {
                from: currentUrl,
              },
            }}
          >
            Add +
          </LinkButton>
        )} */}
      </Header>
      <SidesTableWrapper>
        <SidesTable sides={sides} />
      </SidesTableWrapper>
      <ButtonSwitch
        size="md"
        buttons={[
          { label: 'Current', onClick: showTop, active: !showingFollowing },
          {
            label: 'Historical ',
            onClick: showFollowing,
            active: showingFollowing,
          },
        ]}
      />
    </Fullpage>
  );
};

export default DashboardLayout;

let Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 5px;
  margin-bottom: 0.5rem;
  /* background: rgb(128, 128, 128); */

  h1 {
    /* background: -webkit-linear-gradient(transparent, black); */
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    font-size: 1.8rem;
    font-weight: bold;
    /* font-family: arial; */
    font-style: italic;
    color: ${({ theme }) => theme.borderDark};
    text-shadow: 2px 2px white;
    span {
      /* font-weight: 100; */
    }
    small {
      font-size: 0.6em;
      color: black;
      font-weight: 100;
      text-shadow: 1px 1px white;

      color: ${({ theme }) => theme.borderDark};
      text-decoration: none;
      /* font-style: normal; */
      margin-left: 0.5rem;
    }
  }
`;

let SidesTableWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  & > div {
    height: 100%;
  }
`;
