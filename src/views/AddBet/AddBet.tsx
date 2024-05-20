import React, { useState } from 'react';
import styled from 'styled-components';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { Button, WindowContent, TextField, Toolbar, TextInput } from 'react95';

import FullPageWindow from '../../components/FullPageWindow/FullPageWindow';
import WindowHeader from '../../components/WindowHeader/WindowHeader';
import CloseIcon from '../../components/CloseIcon/CloseIcon';
import LinkButton from '../../components/LinkButton/LinkButton';

import JuggleIcon from '../../assets/img/insert-object.png';

const AddBet = ({ player }) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(e.target.value);
  };

  useLockBodyScroll();
  return (
    <FullPageWindow style={{ position: 'absolute', top: '0' }}>
      <WindowHeader>
        <img
          alt="Juggle icon"
          src={JuggleIcon}
          style={{
            height: 27,
            marginTop: 2,
            marginRight: '0.5rem',
            imageRendering: 'pixelated',
          }}
        />
        Create Bet
        <LinkButton
          square
          size="sm"
          style={{
            position: 'absolute',
            right: 2,
            top: 3,
            fontWeight: 'bold',
          }}
          goBack
        >
          <CloseIcon />
        </LinkButton>
      </WindowHeader>
      <SWindowContent>
        <h1>Add Bet</h1>
      </SWindowContent>
    </FullPageWindow>
  );
};

// TODO: remove withRouter?
export default AddBet;

let SWindowContent = styled(WindowContent)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 37px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;

const SearchWrapper = styled(Toolbar)`
  margin: 0 -4px;
`;
