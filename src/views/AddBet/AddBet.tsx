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
} from 'react95';

import FullPageWindow from '../../components/FullPageWindow/FullPageWindow';
import WindowHeader from '../../components/WindowHeader/WindowHeader';
import CloseIcon from '../../components/CloseIcon/CloseIcon';
import LinkButton from '../../components/LinkButton/LinkButton';

import JuggleIcon from '../../assets/img/insert-object-new.png';

import SidesData from '../../store/sides051124.json';

const AddBet = ({ player, onClose }) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [selectedSide, setSelectedSide] = useState(undefined);

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
            onChange={(side) => {
              console.log(side);
              setSelectedSide(side.value);
            }}
            value={selectedSide}
            options={[
              // { label: '', value: undefined },
              ...SidesData.map((side) => {
                return {
                  label: `${side.betType} - ${
                    side.betType !== 'Proposition'
                      ? side.players.map((p) => p.name)
                      : side.prop
                  }${side.betType === 'Gross Score' ? `: ${side.score}` : ''}`,
                  value: side,
                };
              }),
            ]}
          />
        </div>
        {selectedSide?.betType === 'Matchup' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              padding: '1rem',
            }}
          >
            <div>
              <Button
                style={{ padding: '0.75rem', minWidth: '100px' }}
                size="lg"
              >
                {selectedSide?.sides[0].side}
              </Button>
            </div>
            <div>
              <Button
                style={{ padding: '0.75rem', minWidth: '100px' }}
                size="lg"
              >
                {selectedSide?.sides[1].side}
                {selectedSide?.sides[1].action}
              </Button>
            </div>
          </div>
        )}
        {selectedSide?.betType === 'Proposition' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              padding: '1rem',
            }}
          >
            <div>
              <Button
                style={{ padding: '0.75rem', minWidth: '100px' }}
                size="lg"
              >
                Yes
              </Button>
            </div>
            <div>
              <Button
                style={{ padding: '0.75rem', minWidth: '100px' }}
                size="lg"
              >
                No
              </Button>
            </div>
          </div>
        )}
        {selectedSide?.betType === 'Gross Score' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              padding: '1rem',
            }}
          >
            <div>
              <Button
                style={{ padding: '0.75rem', minWidth: '100px' }}
                size="lg"
              >
                Over
              </Button>
            </div>
            <div>
              <Button
                style={{ padding: '0.75rem', minWidth: '100px' }}
                size="lg"
              >
                Under
              </Button>
            </div>
          </div>
        )}
        <div style={{ display: 'flex' }}>
          <div style={{ padding: '2rem 1rem 1rem 2rem' }}>
            <Slider
              size="300px"
              min={1}
              max={20}
              step={1}
              defaultValue={5}
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
          <Button
            style={{ marginTop: 'auto' }}
            size="lg"
            primary
            fullWidth={true}
          >
            Submit
          </Button>
        </div>
        <small>{player.name}</small>
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
