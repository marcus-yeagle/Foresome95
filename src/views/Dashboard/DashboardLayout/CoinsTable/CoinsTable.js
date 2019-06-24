import React from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";
import styled from "styled-components";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeadCell,
  TableDataCell
} from "react95";
import FileIcon from "../../../../components/FileIcon/FileIcon";
const SFileIcon = styled(FileIcon)`
  margin-right: 6px;
`;

const ScrollTable = styled(Table)`
  display: flex;
  flex-direction: column;
  height: 100%;
  -webkit-overflow-scrolling: touch;

  thead,
  tbody,
  tr,
  th,
  td {
    display: block;
  }
  th,
  td {
    flex-shrink: 0 !important;
  }
  tr {
    display: flex;
  }
  th:nth-child(1),
  td:nth-child(1) {
    flex: 4;
  }
  td:nth-child(1) {
    display: flex;
    align-items: center;
  }
  th:nth-child(2),
  td:nth-child(2) {
    flex: 2;
  }
  th:nth-child(3),
  td:nth-child(3) {
    flex: 1.5;
  }
  thead {
    flex-shrink: 0;
  }
  tbody {
    height: 200px;
    flex: 1;
    overflow: auto;
  }
`;
class CoinsTable extends React.Component {
  handleChangeOrder = orderBy => {
    const { history } = this.props;

    const currentSearchParams = new URLSearchParams(history.location.search);
    const currentOrderBy = currentSearchParams.get("orderBy");
    console.log(currentSearchParams.get("desc"));
    let desc;
    if (currentOrderBy === orderBy) {
      desc = !(currentSearchParams.get("desc") === "true" ? true : false);
    } else {
      desc = orderBy === "name" ? false : true;
    }

    const location = {
      pathname: history.location.pathname,
      search: `?orderBy=${orderBy}&desc=${desc}`,
      hash: history.location.hash
    };
    history.push(location);
  };

  render() {
    const { history, data } = this.props;
    const searchParams = new URLSearchParams(history.location.search);
    let orderBy = searchParams.get("orderBy");
    let desc = searchParams.get("desc") === "true" ? 1 : -1;

    const orderPairs = {
      price: "PRICE",
      change: "CHANGEPCT24HOUR",
      name: "coinName"
    };

    let tableData;
    if (!data) {
      tableData = null;
    } else {
      orderBy = orderPairs[orderBy];
      desc = orderBy === "name" ? -desc : desc;

      const orderedData = data.sort((a, b) => {
        return (b[orderBy] > a[orderBy] ? 1 : -1) * desc;
      });
      tableData = orderedData.map((coinData, i) => {
        const {
          name,
          coinName,
          symbol,
          imageURL,
          PRICE = 0,
          CHANGEPCT24HOUR = 0
        } = coinData;
        return (
          <TableRow key={i} onClick={() => history.push(`/coins/${symbol}`)}>
            <TableDataCell>
              <SFileIcon height={22} imageURL={imageURL} />
              {`${coinName.toLowerCase()}.${name.toLowerCase()}`}
            </TableDataCell>
            <TableDataCell style={{ textAlign: "right" }}>
              {PRICE.toFixed(2)}
            </TableDataCell>
            <TableDataCell style={{ textAlign: "right" }}>
              {CHANGEPCT24HOUR.toFixed(2)}%
            </TableDataCell>
          </TableRow>
        );
      });
    }
    return (
      <ScrollTable>
        <TableHead>
          <TableRow>
            <TableHeadCell onClick={() => this.handleChangeOrder("name")}>
              Name
            </TableHeadCell>
            <TableHeadCell onClick={() => this.handleChangeOrder("price")}>
              Price
            </TableHeadCell>
            <TableHeadCell onClick={() => this.handleChangeOrder("change")}>
              Change
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>{tableData}</TableBody>
      </ScrollTable>
    );
  }
}

CoinsTable.propTypes = {
  data: PropTypes.array
};

export default withRouter(CoinsTable);
