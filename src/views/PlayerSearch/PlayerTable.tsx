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

const COIN_LIMIT = 40;

type CoinRow = {
  name: string;
  coinName: string;
  symbol: string;
  imageURL: string;
  sortOrder: number;
  isFollowed: boolean;
  // [a: string]: any;
};

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
    let { history, location, data, onFollow, searchPhrase } = this.props;
    const currentUrl = location.pathname + location.search;

    searchPhrase = searchPhrase.toLowerCase();

    // TODO: use those values instead of rank/name/following
    const orderPairs = {
      rank: 'sortOrder',
      name: 'coinName',
      following: 'isFollowed',
    } as const;

    let tableData = [
      {
        name: 'Hiers, Paul',
        indx: 3,
        tee: 'black',
      },
      {
        name: 'Sickles, Corey',
        indx: 11,
        tee: 'blue',
      },
    ];

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
                  Index
                </TableHeadCell>
                <TableHeadCell>Tees</TableHeadCell>
                <TableHeadCell
                  onClick={() => this.handleChangeOrder('following')}
                >
                  +
                </TableHeadCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>{tableData}</TableBody> */}
          </Table>
        </TableWrapper>
        <TableFooter>
          <WellContainer>
            <Well>
              {data
                ? `Showing ${tableData ? tableData.length : 0} player(s) of ${
                    data.length
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
const SFileIcon = styled(FileIcon)`
  margin-right: 6px;
`;
const CoinName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
let TableWrapper = styled.div`
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
const SCheckbox = styled(Checkbox)`
  height: 14px;
  pointer-events: none;
  & > div {
    margin-left: 0.25rem;
  }
`;
const EyeIconIMG = styled.img`
  height: 26px;
  width: auto;
  margin-top: 3px;
`;
