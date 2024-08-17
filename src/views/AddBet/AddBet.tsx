import React, { useState } from 'react';
import styled from 'styled-components';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import {
  Button,
  WindowContent,
  TextField,
  Toolbar,
  TextInput,
  Select,
  Slider,
  GroupBox,
} from 'react95';

import FullPageWindow from '../../components/FullPageWindow/FullPageWindow';
import WindowHeader from '../../components/WindowHeader/WindowHeader';
import CloseIcon from '../../components/CloseIcon/CloseIcon';
import LinkButton from '../../components/LinkButton/LinkButton';

import JuggleIcon from '../../assets/img/insert-object-new.png';

// import SidesData from '../../store/sides051124.json';
import { formatCurrency } from '../../utils';
import { useSelector } from 'react-redux';
import { set } from 'mongoose';

const AddBet = ({ player, onClose }) => {
  const sides = useSelector((state: any) => state.sides);

  const [searchPhrase, setSearchPhrase] = useState('');
  const [selectedSide, setSelectedSide] = useState(undefined);
  const [selectedSideType, setSelectedSideType] = useState(undefined);
  const [currentWager, setCurrentWager] = useState(5);
  const [yesSideBtnDisabled, setYesSideBtnDisabled] = useState(undefined);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(e.target.value);
  };

  function convertAmericanToDecimal(americanOdds) {
    // Convert the input to a number
    const odds = americanOdds;

    // Check if the conversion was successful
    // if (isNaN(odds)) {
    //   throw new Error('Invalid American odds string.');
    // }

    // Check if the odds are positive or negative
    if (odds > 0) {
      // Positive odds
      return odds / 100 + 1;
    } else if (odds < 0) {
      // Negative odds
      return 100 / Math.abs(odds) + 1;
    } else {
      // Odds are zero
      return 1;
    }
  }

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
        Place Bet
        <Button
          square
          onClick={onClose}
          size="sm"
          style={{
            position: 'absolute',
            right: 2,
            top: 3,
            fontWeight: 'bold',
          }}
        >
          <CloseIcon />
        </Button>
      </WindowHeader>
      <SWindowContent>
        <div>
          <small>Select Side</small>
          <Select
            style={{ flexShrink: 0 }}
            width={'100%'}
            onChange={(s) => {
              console.log(s.value);
              setSelectedSideType(s.value);
            }}
            value={selectedSideType}
            options={[
              { label: '-', value: undefined },
              ...sides?.data?.map((side) => {
                return {
                  label: `${side.betType} - ${
                    side.betType !== 'Proposition'
                      ? side.players.map((p) => p)
                      : side.prop
                  }${side.betType === 'Gross Score' ? `: ${side.score}` : ''}`,
                  value: side,
                };
              }),
            ]}
          />
        </div>
        {selectedSideType &&
          selectedSideType?.betType !== 'Group Net Winner' && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '1rem',
              }}
            >
              <div>
                <Button
                  onClick={() => {
                    setYesSideBtnDisabled(!yesSideBtnDisabled);
                    setSelectedSide(selectedSideType?.sides[0]);
                  }}
                  style={{
                    padding: '0.75rem',
                    minWidth: '100px',
                    outline: `${
                      selectedSide === selectedSideType?.sides[0]
                        ? '3px solid #008000'
                        : 'none'
                    }`,
                  }}
                  size="lg"
                >
                  {selectedSideType?.sides[0].side}&nbsp;&nbsp;&nbsp;
                  {`(${selectedSideType?.sides[0].action})`}
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => {
                    setYesSideBtnDisabled(!yesSideBtnDisabled);
                    setSelectedSide(selectedSideType?.sides[1]);
                  }}
                  style={{
                    padding: '0.75rem',
                    minWidth: '100px',
                    outline: `${
                      selectedSide === selectedSideType?.sides[1]
                        ? '3px solid #F00'
                        : 'none'
                    }`,
                  }}
                  size="lg"
                >
                  {selectedSideType?.sides[1].side}&nbsp;&nbsp;&nbsp;
                  {`(${selectedSideType?.sides[1].action})`}
                </Button>
              </div>
            </div>
          )}
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <div style={{ padding: '1.5rem 1rem 1rem 2rem' }}>
            <Slider
              size="300px"
              min={1}
              max={20}
              step={1}
              defaultValue={currentWager}
              onChange={(e) => setCurrentWager(e)}
              marks={[
                { value: 1, label: '$1' },
                { value: 2, label: '$2' },
                { value: 3, label: '' },
                { value: 4, label: '' },
                { value: 5, label: '$5' },
                { value: 6, label: '' },
                { value: 7, label: '' },
                { value: 8, label: '$8' },
                { value: 9, label: '' },
                { value: 10, label: '$10' },
                { value: 11, label: '' },
                { value: 12, label: '$12' },
                { value: 13, label: '' },
                { value: 14, label: '$14' },
                { value: 15, label: '' },
                { value: 16, label: '$16' },
                { value: 17, label: '' },
                { value: 18, label: '$18' },
                { value: 19, label: '' },
                { value: 20, label: '$20' },
              ]}
              orientation="vertical"
            />
          </div>
          <div
            style={{
              width: '100%',
              paddingTop: '1.5rem',
              paddingLeft: '1rem',
            }}
          >
            <GroupBox label={selectedSideType?.betType}>
              {['Group Net Winner', 'Gross Score'].includes(
                selectedSideType?.betType
              ) && (
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <small style={{ fontWeight: 'bold' }}>
                    {selectedSideType?.score}
                  </small>
                  {/* <h1
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                    }}
                  >
                    {`${selectedSideType?.players[0].name} (${selectedSideType?.players[0].indx})`}
                  </h1> */}
                  <h1
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                    }}
                  >
                    {selectedSideType?.action > 0 ? '+' : ''}
                    {selectedSideType?.action}
                  </h1>
                </div>
              )}
              <hr />
              <small>Wager:</small>
              <CurrentWager>{formatCurrency(currentWager, 'USD')}</CurrentWager>
              <small>To Win:</small>
              <CurrentWager>
                {formatCurrency(
                  convertAmericanToDecimal(selectedSide?.action ?? -110) *
                    currentWager,
                  'USD'
                ) ?? 0}
              </CurrentWager>
            </GroupBox>
          </div>
        </div>
        <Button
          disabled={!selectedSide || !selectedSideType}
          style={{ marginTop: '1.25rem' }}
          size="lg"
          primary
          fullWidth={true}
          onClick={() => {
            console.log(currentWager, selectedSide, selectedSideType);
          }}
        >
          Submit
        </Button>
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
const CurrentWager = styled.div`
  height: 32px;
  font-size: 2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
  text-align: right;
`;
