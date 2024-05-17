import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import { Button } from 'react95';

const BetDetailModal = ({ detailData, setIsOpened, isOpened }: any) => {
  console.log(detailData);

  return (
    <ThemeProvider theme={original}>
      {isOpened && (
        <Modal onClick={() => setIsOpened(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <h3
              style={{
                fontWeight: 'bold',
                fontSize: '1.1em',
              }}
            >
              Clippy is dead
            </h3>
            <p style={{ lineHeight: '1.5', margin: '1rem 0 2rem' }}>
              I'm trying to bring it back to life.
              <br />
              I've spent couple of months working on this app and I am not even
              interested in crypto. If you like what you see, show some love.
            </p>
            <br />
            <Button
              as="a"
              //@ts-ignore
              variant="flat"
              primary
              fullWidth
              onClick={() => setIsOpened(false)}
            >
              Continue
            </Button>
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
`;

const ModalBody = styled.div`
  /* position: relative; */
  height: 200px;
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
