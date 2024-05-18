import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { Button, WindowContent, TextField, Toolbar, TextInput } from 'react95';

import SearchIcon from '../../assets/img/system-search.png';
import { CoinsTableProps } from '../CoinSearch/CoinsTable';
import PlayerTable from './PlayerTable';

type Props = RouteComponentProps<{}> & Pick<any, 'data' | 'onFollow'>;

const Layout = ({ data, onFollow }: Props) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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
          onClick={() => setSearchPhrase('')}
        >
          Clear
        </Button>
      </SearchWrapper>
      <div>
        <PlayerTable
          data={['foo', 'bar']}
          onFollow={onFollow}
          searchPhrase={searchPhrase}
        ></PlayerTable>
      </div>
    </div>
  );
};

// TODO: remove withRouter?
export default withRouter(Layout);

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
