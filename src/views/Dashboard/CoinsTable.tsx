import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import {
  TableHead,
  TableBody,
  TableRow,
  TableHeadCell,
  TableDataCell,
} from 'react95';
import FileIcon from '../../components/FileIcon/FileIcon';
import EyeIcon from '../../assets/img/eyeIcon.png';
import FlexTable from '../../components/FlexTable/FlexTable';
import { CoinsData, CoinsInfo } from '../../store/reducers/coins';
import SidesData from '../../store/sides051124.json';
import BetDetailModal from '../../components/BetDetailModal/BetDetailModal';

// TODO: proper typing for router search params
type OrderBy = 'price' | 'change' | 'name';
type Props = RouteComponentProps<{
  orderBy: OrderBy;
}> & {
  data: (CoinsInfo[string] & CoinsData[string])[] | null;
};

const CoinsTable = ({ history, data, location }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const [betDetail, setBetDetail] = useState(undefined);

  const handleChangeOrder = (orderBy: OrderBy) => {
    const currentSearchParams = new URLSearchParams(history.location.search);
    const currentOrderBy = currentSearchParams.get('orderBy') as OrderBy;
    let desc;

    if (currentOrderBy === orderBy) {
      desc = !(currentSearchParams.get('desc') === 'true' ? true : false);
    } else {
      desc = orderBy === 'name' ? false : true;
    }

    const location = {
      pathname: history.location.pathname,
      search: `?orderBy=${orderBy}&desc=${desc}`,
      hash: history.location.hash,
    };
    history.push(location);
  };

  const searchParams = new URLSearchParams(location.search);
  let orderBy = searchParams.get('orderBy') as OrderBy;
  let desc = searchParams.get('desc') === 'false' ? -1 : 1;

  if (!location.search.includes('orderBy')) {
    orderBy = 'price';
    desc = 1;
  }

  const orderPairs = {
    price: 'PRICE',
    change: 'CHANGEPCT24HOUR',
    name: 'coinName',
  } as const;

  let tableData;
  if (!data) {
    tableData = null;
  } else {
    // dealing with case where there's no current price and change data of coin
    data = data.map((dataPoint) => ({
      ...dataPoint,
      PRICE: dataPoint.PRICE || 0,
      CHANGEPCT24HOUR: dataPoint.CHANGEPCT24HOUR || 0,
    }));
    let order = orderPairs[orderBy];
    desc = order === orderPairs.name ? -desc : desc;
    const orderedData = data.sort((a, b) => {
      return (b[order] > a[order] ? 1 : -1) * desc;
    });
    tableData = orderedData.map((coinData, i) => {
      const {
        name,
        coinName,
        symbol,
        imageURL,
        PRICE = 0,
        CHANGEPCT24HOUR = 0,
      } = coinData;
      return (
        <TableRow key={i} onClick={() => history.push(`/coins/${symbol}`)}>
          <TableDataCell>
            <SFileIcon height={22} imageURL={imageURL} />
            <CoinName>
              {`${coinName.toLowerCase()}.${name.toLowerCase()}`}
            </CoinName>
          </TableDataCell>
          <TableDataCell></TableDataCell>
          <TableDataCell style={{ textAlign: 'right' }}>
            {PRICE.toFixed(2)}
          </TableDataCell>
          <TableDataCell style={{ textAlign: 'right' }}>
            {CHANGEPCT24HOUR.toFixed(2)}%
          </TableDataCell>
        </TableRow>
      );
    });
  }

  function handleBetClick(d: any, i: number) {
    console.log(d, i);
    setIsOpened(true);
    setBetDetail(d);
  }

  console.log(SidesData);
  let sideTableData = SidesData.map((sideData, i) => {
    return (
      <TableRow key={i} onClick={() => undefined}>
        <TableDataCell>
          {sideData.betType === 'Gross Score'
            ? `${sideData.betType} (${sideData.score})`
            : sideData.betType}
        </TableDataCell>
        <TableDataCell>
          {sideData.betType === 'Proposition'
            ? 'All'
            : sideData.players.map(
                (p) =>
                  p.name.substring(0, p.name.indexOf(',')) +
                  (sideData.players.length > 1 ? '/' : '')
              )}
        </TableDataCell>
        <TableDataCell style={{ textAlign: 'right' }}>
          <img
            src={EyeIcon}
            style={{ height: 24, padding: '0.5rem' }}
            onClick={() => {
              handleBetClick(sideData, i);
            }}
          />
        </TableDataCell>
      </TableRow>
    );
  });

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell onClick={() => handleChangeOrder('name')}>
              Type
            </TableHeadCell>
            <TableHeadCell onClick={() => handleChangeOrder('name')}>
              Player(s)
            </TableHeadCell>
            <TableHeadCell onClick={() => handleChangeOrder('price')}>
              View
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>{sideTableData}</TableBody>
      </Table>
      <BetDetailModal
        isOpened={isOpened}
        setIsOpened={(b) => setIsOpened(b)}
        detailData={betDetail}
      />
    </>
  );
};

CoinsTable.propTypes = {
  data: PropTypes.array,
};

export default withRouter(CoinsTable);

const SFileIcon = styled(FileIcon)`
  margin-right: 6px;
`;
const CoinName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Table = styled(FlexTable)`
  th:nth-child(1),
  td:nth-child(1) {
    flex: 4;
  }
  td:nth-child(1) {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  th:nth-child(2),
  td:nth-child(2) {
    flex: 4;
  }

  th:nth-child(3),
  td:nth-child(3) {
    flex: 1;
  }
  th:nth-child(4),
  td:nth-child(4) {
    flex: 1;
  }
`;
