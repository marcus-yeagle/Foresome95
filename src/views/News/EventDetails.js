import React, { useState } from "react";
import styled from "styled-components";

import { setEventSeen } from "../../store/actions/events";

import {
  Window,
  WindowHeader,
  WindowContent,
  Select,
  Cutout,
  Toolbar,
  Button,
  Bar
} from "react95";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
const EventDetails = ({ events, initialIndex, onClose, setEventSeen }) => {
  const [eventIndex, setEventIndex] = useState(initialIndex);
  useLockBodyScroll();

  const {
    title,
    description,
    screenshot,
    start_date,
    end_date,
    organizer,
    website,
    email
  } = events[eventIndex];
  if (!events[eventIndex].seen) {
    setEventSeen(events[eventIndex].id);
  }
  const eventSelectItems = events.map((e, i) => ({
    label: `${e.title}`,
    value: i
  }));
  console.log(eventIndex, eventSelectItems[eventIndex]);
  return (
    <SWindow>
      <WindowHeader>
        🌉 Event explorer
        <Button
          square
          size="sm"
          style={{
            position: "absolute",
            right: "6px",
            top: "5px",
            fontWeight: "bold"
          }}
          onClick={onClose}
        >
          X
        </Button>
      </WindowHeader>
      <SWindowContent>
        <EventSelectWrapper>
          <div style={{ flexShrink: 0, margin: "0 0.5rem 0 0.125rem" }}>
            <Bar />
            <Bar />
          </div>
          <div style={{ width: "100%", position: "relative" }}>
            <Select
              items={eventSelectItems}
              selectedIndex={2}
              width={"100%"}
              onChange={index => setEventIndex(index)}
            />
          </div>
        </EventSelectWrapper>
        <SCutout>
          <Description>
            <EventImage src={screenshot} />
            <div>
              Date:{start_date}-{end_date}
            </div>
            <div>Organizer: {organizer}</div>
            <div>Website: {website}</div>
            {description}
          </Description>
        </SCutout>
      </SWindowContent>
      <SToolbar>
        <Button
          onClick={() => setEventIndex(eventIndex - 1)}
          disabled={eventIndex <= 0}
          fullWidth
        >
          Back
        </Button>
        <Button
          onClick={() => setEventIndex(eventIndex + 1)}
          disabled={eventIndex >= events.length - 1}
          fullWidth
        >
          Next
        </Button>
      </SToolbar>
    </SWindow>
  );
};

export default EventDetails;

const SWindow = styled(Window)`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9999;

  display: flex;
  flex-direction: column;
`;
const SWindowContent = styled(WindowContent)`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0.25rem;
`;
const SCutout = styled(Cutout)`
  flex: 1;
  background: white;
  overflow: hidden;
`;
const Description = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  overflow-y: scroll;
`;
const Details = styled.div`
  height: 100px;
  flex-shrink: 0;
`;
const SToolbar = styled(Toolbar)`
  flex-shrink: 0;
`;

const EventSelectWrapper = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  margin-right: 2px;
  padding: 0.25rem;
  padding-top: calc(0.25rem + 2px);
  border: 2px solid ${({ theme }) => theme.borderDark};
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.borderLightest};
  }
`;
const EventImage = styled.img`
  width: 100%;
  height: auto;
`;