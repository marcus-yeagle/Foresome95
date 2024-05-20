import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { Button, WindowContent, TextField, Toolbar, TextInput } from 'react95';

import SearchIcon from '../../assets/img/system-search.png';
import { CoinsTableProps } from '../CoinSearch/CoinsTable';
import PlayerTable from './PlayerTable';

const PlayerSearch = ({ data, onPlayerSelect }: any) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [hasSelection, setHasSelection] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(e.target.value);
  };

  useLockBodyScroll();
  return (
    <div>
      <SearchWrapper>
        <img
          alt="Search icon"
          src={SearchIcon}
          style={{
            height: 27,
            marginTop: 2,
            marginRight: '0.5rem',
            imageRendering: 'pixelated',
          }}
        />
        <TextInput
          placeholder="Search Player..."
          value={searchPhrase}
          onChange={handleSearch}
          width="100%"
          style={{ marginRight: '4px', width: '100%' }}
        />
        <Button
          disabled={searchPhrase === ''}
          onClick={() => {
            setSearchPhrase('');
            setHasSelection(false);
          }}
        >
          Clear
        </Button>
      </SearchWrapper>
      {searchPhrase && !hasSelection && (
        <div>
          <PlayerTable
            data={['foo', 'bar']}
            onFollow={(p: string) => {
              onPlayerSelect(p);
              setHasSelection(true);
            }}
            searchPhrase={searchPhrase}
          ></PlayerTable>
        </div>
      )}
    </div>
  );
};

export default PlayerSearch;

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
