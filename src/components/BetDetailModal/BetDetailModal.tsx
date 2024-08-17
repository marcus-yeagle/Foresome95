import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import { Button, GroupBox } from 'react95';

const BetDetailModal = ({ detailData, setIsOpened, isOpened }: any) => {
  function renderBetDetailLabel() {
    if (detailData.betType === 'Gross Score') {
      return `${detailData.score} - ${detailData.betType}`;
    } else {
      return detailData.betType;
    }
  }

  function renderPlayerBetDetail() {
    return (
      <>
        <ul>
          {detailData.players.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <ThemeProvider theme={original}>
      {isOpened && (
        <Modal onClick={() => setIsOpened(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <div style={{ minWidth: '250px' }}>
              <GroupBox variant="flat" label={renderBetDetailLabel()}>
                {renderPlayerBetDetail()}
                <br />
                {detailData.betType === 'Group Net Winner' ? (
                  <div>
                    {detailData.sides.map((s: any, i: number) => (
                      <Button
                        key={i}
                        primary={s.action < 0}
                        disabled
                        variant="flat"
                        style={{ marginRight: '0.5rem' }}
                      >
                        {
                          detailData.bettors.filter(
                            (b) => b?.side?.side === s.side
                          ).length
                        }
                        &nbsp;&nbsp;
                        {s.side}
                      </Button>
                    ))}
                    <br />
                    <br />
                    <GroupBox variant="flat" label={'Group'}>
                      <p>Steele, Matt</p>
                      <p>Weiss, Frank</p>
                      <p>Palm, Bryce</p>
                    </GroupBox>
                  </div>
                ) : (
                  <></>
                )}
                {detailData.betType === 'Gross Score' ? (
                  <div style={{ paddingTop: '2.5rem' }}>
                    {detailData.sides.map((s: any, i: number) => (
                      <Button
                        key={i}
                        primary={s.action < 0}
                        disabled
                        variant="flat"
                        style={{ marginRight: '0.5rem' }}
                      >
                        {
                          detailData?.bettors.filter(
                            (b) => b.side.side === s.side
                          ).length
                        }
                        &nbsp;&nbsp;
                        {s.side}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
                {detailData.betType === 'Matchup' ? (
                  <div style={{ paddingTop: '2.5rem' }}>
                    {detailData.sides.map((s: any, i: number) => (
                      <Button
                        key={i}
                        primary={s.action < 0}
                        disabled
                        variant="flat"
                        style={{ marginRight: '0.5rem' }}
                      >
                        {s.side}&nbsp;
                        {s.action}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
                {detailData.betType === 'Proposition' ? (
                  <div>
                    <p style={{ lineHeight: '1.5', margin: '1rem 0 2rem' }}>
                      "{detailData.prop}""
                    </p>
                    <p>
                      Total Wagerd: $
                      {detailData?.bettors
                        .map((b) => b.wager)
                        .reduce((a, b) => a + b, 0)}
                    </p>
                    <p>
                      Possible Winnings: $
                      {detailData?.bettors
                        .map((b) => b.toWin)
                        .reduce((a, b) => a + b, 0)
                        .toFixed(2)}
                    </p>
                    <br />
                    {detailData.sides.map((s: any) => (
                      <Button
                        primary={s.action < 0}
                        disabled
                        variant="flat"
                        style={{ marginRight: '0.5rem' }}
                      >
                        {
                          detailData?.bettors.filter(
                            (b) => b.side.side === s.side
                          ).length
                        }
                        &nbsp;&nbsp;
                        {s.side}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </GroupBox>
            </div>

            {/* <Button
              as="a"
              //@ts-ignore
              variant="flat"
              primary
              fullWidth
              onClick={() => setIsOpened(false)}
            >
              Continue
            </Button> */}
          </ModalBody>
        </Modal>
      )}
    </ThemeProvider>
  );
};

export default BetDetailModal;

const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  /* align-items: flex-end; */
  justify-content: space-around;
  top: 0;
  /* bottom: var(--safe-area-inset-bottom) + 1000; */
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 2rem 0 2rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

const ModalBody = styled.div`
  /* position: relative; */
  height: 270px;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.borderDarkest};
  color: ${({ theme }) => theme.materialText};

  border-radius: 0.5rem;
  background: ${({ theme }) => theme.tooltip};
  filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.55));

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-100%, 100%);
    width: 1.5rem;
    height: 1.5rem;
    clip-path: polygon(0.5rem 0, 100% 0, 100% 100%);

    border-right: 2px solid ${({ theme }) => theme.borderDarkest};
    background: ${({ theme }) => theme.tooltip};
  }
`;
