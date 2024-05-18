import React from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  TableHead,
  TableBody,
  TableRow,
  TableHeadCell,
  TableDataCell,
  Checkbox,
} from 'react95';
import FlexTable from '../../components/FlexTable/FlexTable';

import FileIcon from '../../components/FileIcon/FileIcon';
import EyeIcon from '../../assets/img/eyeIcon.png';
import Well from '../../components/Well/Well';
import WellContainer from '../../components/WellContainer/WellContainer';
import PLAYERS from '../../store/players.json';

export type PlayerTableProps = {
  data: any[] | null;
  onFollow: (coinName: string, follow: boolean) => void;
  searchPhrase: string;
} & RouteComponentProps<{}>;

type State = {
  orderBy: 'rank' | 'name' | 'following' | 'indx';
  desc: boolean;
};

class PlayerTable extends React.Component<PlayerTableProps, State> {
  constructor(props: PlayerTableProps) {
    super(props);
    this.state = {
      orderBy: 'rank',
      desc: false,
    };
  }

  handleChangeOrder = (orderBy: State['orderBy']) => {
    if (orderBy === this.state.orderBy) {
      this.setState((prevState) => ({ desc: !prevState.desc }));
    } else {
      this.setState({ orderBy, desc: true });
    }
  };

  render() {
    let { data, onFollow, searchPhrase } = this.props;
    searchPhrase = searchPhrase.toLowerCase();

    const tableData = PLAYERS.filter((p) => {
      console.log(searchPhrase);
      if (searchPhrase) {
        return p.name.toUpperCase().includes(searchPhrase.toUpperCase());
      }
      return true;
    }).map((p, i) => {
      return (
        <TableRow key={i}>
          <TableDataCell onClick={undefined}>{p.name}</TableDataCell>
          <TableDataCell style={{ textAlign: 'right' }} onClick={undefined}>
            {p.value}
          </TableDataCell>
        </TableRow>
      );
    });

    return (
      <>
        <TableWrapper>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell onClick={() => this.handleChangeOrder('name')}>
                  Name
                </TableHeadCell>
                <TableHeadCell onClick={() => this.handleChangeOrder('indx')}>
                  ID
                </TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>{tableData}</TableBody>
          </Table>
        </TableWrapper>
        <TableFooter>
          <WellContainer>
            <Well>
              {data
                ? `Showing ${tableData ? tableData.length : 0} player(s) of ${
                    PLAYERS.length
                  } total`
                : 'Loading...'}
            </Well>
            <Well draggable />
          </WellContainer>
        </TableFooter>
      </>
    );
  }
}

export default withRouter(PlayerTable);

let TableFooter = styled.footer`
  margin-top: 0.5rem;
  margin-bottom: 2px;
  flex-shrink: 0;
`;
let TableWrapper = styled.div`
  height: 30vh;
  flex: 1;
  margin-top: 0.5rem;
  overflow: hidden;
  & > div {
    height: 100%;
  }
`;
const Table = styled(FlexTable)`
  th:nth-child(1),
  td:nth-child(1) {
    flex: 1;
  }
  td:nth-child(1) {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  th:nth-child(2),
  td:nth-child(2) {
    width: 60px;
    text-align: center;
  }
  th:nth-child(3),
  td:nth-child(3) {
    width: 60px;
  }
  td:nth-child(3) {
    position: relative;
    text-align: center;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
