import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import { AppDispatch, AppState } from '../../store';
import { Background, Color } from '../../store/reducers/user';
import { ThemeName } from '../../themes';

import { createDisabledTextStyles } from '../../utils';

import {
  Button,
  Checkbox,
  Desktop,
  GroupBox,
  NumberInput,
  Radio,
  Select,
  Slider,
  Tab,
  TabBody,
  Tabs,
  TextInput,
} from 'react95';

import Fullpage from '../../components/Fullpage/Fullpage';

import { SelectOption } from 'react95/dist/Select/Select.types';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import {
  setBackground,
  setCustomBackground,
  setFontSize,
  setScanLinesIntensity,
  setTheme,
  toggleScanLines,
  toggleVintageFont,
} from '../../store/actions/user';
import BackgroundColorPicker from './BackgroundColorPicker';
// import SidesData from '../../store/sides051124.json';
import PlayerSearch from '../PlayerSearch/PlayerSearch';
import { postSide } from '../../API/SidesService';

// {
//   "id": 6,
//   "date": "2024-11-17",
//   "betType": "Group Net Winner",
//   "players": [
//     {
//       "name": "Westerheide, Pete",
//       "indx": 9,
//       "tee": "blue"
//     }
//   ],
//   "score": null,
//   "action": 150,
//   "sides": null,
//   "prop": ""
// },

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Settings = ({
  theme,
  setTheme,
  background,
  backgrounds,
  setBackground,
  setCustomBackground,
  scanLines,
  toggleScanLines,
  setScanLinesIntensity,
  scanLinesIntensity,
  vintageFont,
  toggleVintageFont,
  fontSize,
  setFontSize,
}: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [newBetType, setNewBetType] = useState('');
  const [newBetProp, setNewBetProp] = useState('');
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [score, setScore] = useState(80);
  const [yesAction, setYesAction] = useState(-110); // Yes action state
  const [noAction, setNoAction] = useState(-110); // No action state

  const handleChange = (value: number) => setActiveTab(value);

  const onBackgroundChange = (e: SelectOption<string>) => {
    const newBackground = backgrounds.find(
      (b) => b.value === e.value
      // TODO: is this a good approach?
    );
    newBackground && setBackground(newBackground);
  };
  useLockBodyScroll();

  const swag = React.useCallback(
    (color: string) => setCustomBackground(color),
    [setCustomBackground]
  );

  return (
    <Fullpage style={{ paddingTop: '0.5rem' }}>
      <Tabs value={activeTab} onChange={handleChange}>
        <Tab value={0}>System</Tab>
        <Tab value={1}>Admin</Tab>
      </Tabs>
      <TabBody>
        {activeTab === 0 && (
          <>
            <SField>
              <GroupBox label="Font:">
                <Checkbox
                  name="vintageFont"
                  value="vintageFont"
                  label="Vintage font"
                  onChange={() => toggleVintageFont(!vintageFont)}
                  checked={vintageFont}
                />
                <Pad>
                  <SliderLabel>Size:</SliderLabel>
                  <Slider
                    min={0.8}
                    max={1.2}
                    step={null}
                    value={fontSize}
                    onChange={(val) => setFontSize(val)}
                    marks={[
                      { value: 0.8, label: '0.8' },
                      { value: 0.9, label: '0.9' },
                      { value: 1, label: '1' },
                      { value: 1.1, label: '1.1' },
                      { value: 1.2, label: '1.2' },
                    ]}
                  />
                </Pad>
              </GroupBox>
            </SField>
            <SField></SField>
            <SField>
              <GroupBox
                label={
                  <Checkbox
                    style={{}}
                    name="scanLines"
                    value="scanLines"
                    label="Scan lines"
                    onChange={() => toggleScanLines(!scanLines)}
                    checked={scanLines}
                  />
                }
              >
                <Pad>
                  <SliderLabel isDisabled={!scanLines}>Intensity:</SliderLabel>
                  <Slider
                    disabled={!scanLines}
                    step={10}
                    min={0}
                    max={100}
                    marks={[
                      { value: 0, label: 'min' },
                      { value: 100, label: 'max' },
                    ]}
                    value={scanLinesIntensity}
                    onChange={(val) => setScanLinesIntensity(val)}
                  />
                </Pad>
              </GroupBox>
            </SField>
            <SField>
              <GroupBox label="Theme:">
                {/* {Object.keys(themesLabels).map((themeName) => (
                <>
                  <Radio
                    value={themeName}
                    onChange={() => setTheme(themeName)}
                    checked={theme === themeName}
                    label={themesLabels[themeName]}
                  />
                  <br />
                </>
              ))} */}
                <Radio
                  value="original"
                  onChange={() => setTheme('original')}
                  checked={theme === 'original'}
                  label="original"
                />
                <br />
                <Radio
                  value="olive"
                  onChange={() => setTheme('olive')}
                  checked={theme === 'olive'}
                  label="🍸 Olive"
                />
                <br />
                <Radio
                  value="tokyoDark"
                  onChange={() => setTheme('tokyoDark')}
                  checked={theme === 'tokyoDark'}
                  label="📟 Tokyo Dark"
                />
                <br />
                <Radio
                  value="vaporTeal"
                  onChange={() => setTheme('vaporTeal')}
                  checked={theme === 'vaporTeal'}
                  label="💨 Vapor Teal"
                />
              </GroupBox>
            </SField>
          </>
        )}
        {activeTab === 1 && (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <small>Bet Type</small>
                <Select
                  style={{ flexShrink: 0 }}
                  width={'100%'}
                  onChange={(selectedOption) => {
                    setNewBetType(selectedOption.value);
                    setSelectedPlayers([]);
                    setNewBetProp('');
                  }}
                  value={newBetType}
                  options={[
                    { value: 'Matchup', label: 'Matchup' },
                    { value: 'Gross Score', label: 'Gross Score' },
                    { value: 'Group Net Winner', label: 'Group Net Winner' },
                    { value: 'Proposition', label: 'Prop' },
                  ]}
                />
              </div>
              {newBetType && newBetType !== 'Proposition' && (
                <>
                  <div style={{ padding: '1rem, 0' }}>
                    {selectedPlayers.length > 0 && (
                      <ul>
                        {selectedPlayers.map((p, i) => (
                          <li key={i}>{`Player ${i + 1}: ${p}`}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <PlayerSearch
                      onPlayerClear={() => setSelectedPlayers([])}
                      onPlayerSelect={(p) => {
                        console.log(p);
                        setSelectedPlayers([p]);
                      }}
                    />
                  </div>
                </>
              )}
              {newBetType && newBetType === 'Matchup' && (
                <div>
                  <PlayerSearch
                    onPlayerSelect={(p) => {
                      console.log(p);
                      setSelectedPlayers([...selectedPlayers, p]);
                    }}
                  />
                </div>
              )}
              {newBetType === 'Proposition' && (
                <div>
                  <TextInput
                    multiline
                    rows={4}
                    value={newBetProp}
                    onChange={(e) => {
                      setNewBetProp(e.target.value);
                    }}
                    fullWidth
                  />
                </div>
              )}
              {newBetType === 'Gross Score' && (
                <GroupBox label={`Gross Score: ${score}`}>
                  <Pad>
                    {/* <SliderLabel>{score}</SliderLabel> */}
                    <Slider
                      min={58}
                      max={110}
                      step={1}
                      value={score}
                      onChange={(val) => setScore(val)}
                      marks={[
                        { value: 60, label: '60' },
                        { value: 70, label: '70' },
                        { value: 80, label: '80' },
                        { value: 90, label: '90' },
                        { value: 100, label: '100' },
                        { value: 110, label: '110' },
                      ]}
                    />
                  </Pad>
                </GroupBox>
              )}
              <div style={{ marginTop: '0.75rem' }}>
                <small>
                  {newBetType !== 'Matchup'
                    ? 'Yes/Over Action'
                    : selectedPlayers[0]}
                </small>
                <br />
                <NumberInput
                  defaultValue={yesAction}
                  step={10}
                  min={-1000}
                  max={1000}
                  width={'130'}
                  onChange={(e) => setYesAction(e)}
                />
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <small>
                  {' '}
                  {newBetType !== 'Matchup'
                    ? 'No/Under Action'
                    : selectedPlayers[1]}
                </small>
                <br />
                <NumberInput
                  defaultValue={noAction}
                  step={10}
                  min={-1000}
                  max={1000}
                  width={'130'}
                  onChange={(e) => setNoAction(e)}
                />
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <Button
                  disabled={!newBetType}
                  fullWidth
                  onClick={() => {
                    postSide({
                      id: crypto.randomUUID(),
                      date: new Date().toISOString().split('T')[0],
                      betType: newBetType,
                      players: selectedPlayers,
                      score: score,
                      // action: 150,
                      sides: [
                        {
                          side:
                            newBetType !== 'Matchup'
                              ? 'Over/Yes'
                              : selectedPlayers[0],
                          action: yesAction,
                        },
                        {
                          side:
                            newBetType !== 'Matchup'
                              ? 'Over/Yes'
                              : selectedPlayers[1],
                          action: noAction,
                        },
                      ],
                      prop: newBetProp,
                    });
                    // Reset state variables
                    setNewBetType('');
                    setNewBetProp('');
                    setSelectedPlayers([]);
                    setYesAction(-110);
                    setNoAction(-110);
                  }}
                >
                  Add Bet
                </Button>
              </div>
            </div>
          </>
        )}
      </TabBody>
    </Fullpage>
  );
};

const mapStateToProps = (state: AppState) => ({
  theme: state.user.theme,
  background: state.user.background,
  backgrounds: state.user.backgrounds,
  vintageFont: state.user.vintageFont,
  scanLines: state.user.scanLines,
  scanLinesIntensity: state.user.scanLinesIntensity,
  fontSize: state.user.fontSize,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setTheme: (theme: ThemeName) => dispatch(setTheme(theme)),
  toggleVintageFont: (vintageFont: boolean) =>
    dispatch(toggleVintageFont(vintageFont)),
  setFontSize: (fontSize: number) => dispatch(setFontSize(fontSize)),
  toggleScanLines: (scanLinesOn: boolean) =>
    dispatch(toggleScanLines(scanLinesOn)),
  setScanLinesIntensity: (intensity: number) =>
    dispatch(setScanLinesIntensity(intensity)),
  setBackground: (background: Background) =>
    dispatch(setBackground(background)),
  setCustomBackground: (color: Color) => dispatch(setCustomBackground(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const CustomColorField = styled.div<{ isDisabled: boolean }>`
  float: right;
  margin-right: 0px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  label {
    font-size: 1rem;
    padding-right: 1rem;
    ${({ isDisabled }) =>
      isDisabled &&
      css`
        ${createDisabledTextStyles()}
      `}
  }
`;

const SField = styled.div`
  margin-bottom: 30px;
`;

const SliderLabel = styled.label<{ isDisabled?: boolean }>`
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-left: -1rem;
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      ${createDisabledTextStyles()}
    `}
`;
const Pad = styled.div`
  padding: 8px 16px;
`;

const CenteredDesktop = styled(Desktop)`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;
