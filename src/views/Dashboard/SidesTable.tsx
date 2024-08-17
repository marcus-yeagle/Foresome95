import React, { useEffect, useState } from 'react';
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
import BetDetailModal from '../../components/BetDetailModal/BetDetailModal';
import { useDispatch } from 'react-redux';
import { fetchSidesData } from '../../store/actions/sides';

// TODO: proper typing for router search params
type OrderBy = 'price' | 'change' | 'name';

const SidesTable = (data: any) => {
  const [isOpened, setIsOpened] = useState(false);
  const [betDetail, setBetDetail] = useState(undefined);

  const handleChangeOrder = (orderBy: OrderBy) => {
    const currentSearchParams = new URLSearchParams();
    const currentOrderBy = currentSearchParams.get('orderBy') as OrderBy;
    let desc;

    if (currentOrderBy === orderBy) {
      desc = !(currentSearchParams.get('desc') === 'true' ? true : false);
    } else {
      desc = orderBy === 'name' ? false : true;
    }

    // const location = {
    //   pathname: history.location.pathname,
    //   search: `?orderBy=${orderBy}&desc=${desc}`,
    //   hash: history.location.hash,
    // };
    // history.push(location);
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

  function handleBetClick(d: any, i: number) {
    console.log(d, i);
    setIsOpened(true);
    setBetDetail(d);
  }

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
        <TableBody>
          {data.sides.data?.map((sideData, i) => {
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
                    : sideData?.players?.map((p) => p)}
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
          })}
        </TableBody>
      </Table>
      <BetDetailModal
        isOpened={isOpened}
        setIsOpened={(b: boolean) => setIsOpened(b)}
        detailData={betDetail}
      />
    </>
  );
};

export default SidesTable;

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
