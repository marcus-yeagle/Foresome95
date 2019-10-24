import React from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";

import Clippy from "../Clippy/Clippy";

import { AppBar, Button, Toolbar } from "react95";

import ArticleIcon from "../../assets/img/article.png";
import FolderIcon from "../../assets/img/folder.png";
import GlobeIcon from "../../assets/img/globe.png";
import NotepadIcon from "../../assets/img/notepad.png";

import WorldIcon from "../../assets/img/worldIcon.png";
import UserIcon from "../../assets/img/userIcon.png";
// import UserIcon from "../../assets/img/userIcon.png";
import HomeIcon from "../../assets/img/homeIcon.png";

const NavBar = props => {
  const currentLocation = props.location.pathname;
  return (
    <Nav fixed>
      <SToolbar>
        <SwitchButton
          active={currentLocation === "/coins"}
          onClick={() => props.history.push("/coins")}
          fullWidth
          size="lg"
        >
          <Icon
            active={currentLocation === "/coins"}
            src={HomeIcon}
            alt="icon"
          />
        </SwitchButton>
        <SwitchButton
          active={currentLocation.startsWith("/wallet")}
          onClick={() => props.history.push("/wallet")}
          fullWidth
          size="lg"
        >
          <Icon
            style={{ height: 21 }}
            active={currentLocation === "/wallet"}
            src={UserIcon}
            alt="icon"
          />
        </SwitchButton>
        <SwitchButton
          active={currentLocation === "/news"}
          onClick={() => props.history.push("/news")}
          fullWidth
          size="lg"
        >
          <Icon
            active={currentLocation === "/news"}
            src={WorldIcon}
            alt="icon"
          />
        </SwitchButton>
        <SwitchButton
          active={currentLocation === "/settings"}
          onClick={() => props.history.push("/settings")}
          fullWidth
          size="lg"
        >
          <Icon src={FolderIcon} alt="icon" />
        </SwitchButton>
      </SToolbar>
      <Clippy />
    </Nav>
  );
};

export default withRouter(NavBar);

const Nav = styled(AppBar)`
  top: auto;
  bottom: 0;
  z-index: 666;
`;
const Icon = styled.img`
  image-rendering: pixelated;

  height: 24px;
  filter: ${({ active }) => (active ? "none" : "grayscale(1)")};
`;

const SwitchButton = styled(Button)`
  margin: 0 1px;
`;
const SToolbar = styled(Toolbar)`
  margin: 0 -1px;
`;
