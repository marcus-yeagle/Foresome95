/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router';
import arrayMove from 'array-move';
import {
  Avatar,
  Button,
  Divider,
  Separator,
  TextInput,
  Toolbar,
} from 'react95';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';

import { createMaterialStyles, formatCurrency } from '../../utils';
import EditCoin from './EditCoin';
import Handle from '../../components/Handle/Handle';
import MenuIcon from '../../components/MenuIcon/MenuIcon';

import CurrencySelect from '../../components/CurrencySelect/CurrencySelect';
import Well from '../../components/Well/Well';
import WellContainer from '../../components/WellContainer/WellContainer';
import LinkButton from '../../components/LinkButton/LinkButton';
import SearchIcon from '../../assets/img/system-search.png';
import PlayerSearch from '../PlayerSearch/PlayerSearch';
import AddBet from '../AddBet/AddBet';
import CloseIcon from '../../components/CloseIcon/CloseIcon';

// TODO: cleanup
type WalletCoinData = {
  _amount: number;
  imageURL: string;
  name: string;
  PRICE: number;
  symbol: string;
};

type Props = RouteComponentProps<{}> & {
  data: WalletCoinData[] | null;
  currency: string;
  sortUserHoldings: (coinsList: string[]) => void;
};

const Wallet = ({
  data,
  currency,
  sortUserHoldings,
  match,
  location,
}: Props) => {
  const handleSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    if (!data) return;
    const coinsList = arrayMove(
      data.map((coinData) => coinData.symbol),
      oldIndex,
      newIndex
    );
    sortUserHoldings(coinsList);
  };
  const balance = data
    ? Math.round(
        data
          .map((coin) => coin.PRICE * coin._amount)
          .reduce((a, b) => a + b, 0) * 100
      ) / 100
    : null;

  const [searchPhrase, setSearchPhrase] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [atRiskValue, setAtRiskValue] = useState(0);
  const [toWinValue, setToWinValue] = useState(0);
  const [showMakeBet, setShowMakeBet] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(e.target.value);
  };

  function onPlayerSelect(p: string) {
    setSelectedPlayer(p);
  }

  return (
    <>
      <Wrapper>
        <Top>
          <div>
            <header>
              <a href="">{selectedPlayer}</a>
            </header>
            <Separator />
            <section>
              <div>
                <AvatarWrapper>
                  {selectedPlayer ? (
                    <Avatar size={70} style={{ background: '#008080' }}>
                      {selectedPlayer.split(',')[1].charAt(1) +
                        selectedPlayer.split(',')[0].charAt(0)}
                    </Avatar>
                  ) : (
                    <Avatar size={70}></Avatar>
                  )}
                </AvatarWrapper>
                {selectedPlayer && (
                  <Button
                    style={{ marginTop: '-30px' }}
                    square
                    size="sm"
                    onClick={() => {
                      setSelectedPlayer('');
                      setSearchPhrase('');
                    }}
                  >
                    <CloseIcon />
                  </Button>
                )}
              </div>
              <div>
                <small>Total at Risk</small>
                <TotalBalance>
                  {formatCurrency(atRiskValue, 'USD')}
                </TotalBalance>
                <div>
                  <Toolbar>
                    <Button
                      disabled={!selectedPlayer}
                      onClick={() => setShowMakeBet(true)}
                    >
                      Place Bet
                    </Button>
                  </Toolbar>
                </div>
              </div>
            </section>
            <div
              style={{
                paddingLeft: '0.5rem',
                fontSize: '0.9rem',
                lineHeight: '1.5',
              }}
            ></div>
          </div>
          <div>
            <WellContainer>
              <Well>{new Date().toLocaleDateString()}</Well>
              <Well
                style={{ flexShrink: 0, minWidth: 65, textAlign: 'center' }}
              >
                {data && `${data.length} coin(s)`}
              </Well>
            </WellContainer>
          </div>
          <PlayerSearch onPlayerSelect={onPlayerSelect}></PlayerSearch>
        </Top>
      </Wrapper>
      {showMakeBet && (
        <AddBet
          player={selectedPlayer}
          onClose={() => {
            setShowMakeBet(false);
            // Hack to make things align properly, lib is not resetting this val on close
            setTimeout(() => {
              document.getElementById('root').style.position = null;
            }, 0);
          }}
        />
      )}
    </>
  );
};

export default Wallet;

const Wrapper = styled.div`
  padding-bottom: 100px;
`;

const Top = styled.div`
  ${createMaterialStyles('full')}
  box-shadow: rgba(0, 0, 0, 0.35) 4px 4px 10px 0px;
  margin-bottom: 4rem;
  padding-right: 2px;
  & > div {
    padding: 0.125rem 0.25rem;
  }
  & > div:first-child {
    margin-bottom: 0.5rem;
  }
  & > div:last-child {
    padding-bottom: 6px;
  }
  header {
    text-align: center;
    font-weight: bold;
    /* font-size: 1.1rem; */
    padding: 12px;
    min-height: 21px;
  }
  section {
    padding: 0.625rem 0;
    display: flex;
    justify-content: space-between;
    & > div {
      /*width: 100%;*/
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

const AvatarWrapper = styled.div`
  margin-left: 0.25rem;
  display: inline-block;
  object-fit: cover;
  height: 85px;
  width: 85px;
  border-radius: 50%;
  flex-shrink: 0;
`;
const TotalBalance = styled.div`
  height: 32px;
  font-size: 2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
  text-align: right;
`;
const ListWrapper = styled.section`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;
const CoinIcon = styled.img`
  display: inline-block;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  object-fit: contain;
`;
const MainRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  ${createMaterialStyles('full')}
  padding: 0.75rem 0.5rem;
  line-height: 1;
`;

const LeftCol = styled.header`
  display: flex;
  align-items: center;

  h4 {
    margin-left: 10px;
    margin-top: 2px;
  }
`;
const RightCol = styled.div`
  display: flex;
  align-items: center;
`;
const Balance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 5px;
  data:last-child {
    color: ${({ theme }) => theme.borderDark};
    margin-top: 4px;
  }
`;

const CoinLinkContent = styled.div`
  display: flex;
  align-items: center;
`;

const SearchWrapper = styled(Toolbar)`
  margin: 0 -4px;
`;
