import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import API from "../../API";
import { fetchCoinsList } from "../../store/actions/coins";
import { setUserCoin } from "../../store/actions/user";
import Layout from "./Layout";

function HLCAverage(high, low, close) {
  return (high + low + close) / 3;
}
export class CoinDetails extends Component {
  // static propTypes = {
  // prop: PropTypes
  // };
  // TO PREVENT UPDATES ON UNMOUNTED COMPONENT
  _isMounted = false;
  state = {
    currency: this.props.currency,
    data: null,
    historicalData: null,
    dataLoading: false,
    timeSpan: "24H"
  };
  componentDidMount = async () => {
    let { timeSpan, currency } = this.state;
    const { coinInfo, fetchCoinsList } = this.props;

    this._isMounted = true;
    if (!coinInfo) {
      await fetchCoinsList();
    }

    // let data = await API.fetchCoinsData([coin], currency);
    this.handleFetchCoinsData(currency);
    this.handleFetchHistoricalData(timeSpan, currency);
  };
  componentWillUnmount() {
    this._isMounted = false;
  }
  handleFetchCoinsData = async currency => {
    const { coin } = this.props;
    let data = await API.fetchCoinsData([coin], currency, true);
    data = data[coin];
    if (this._isMounted) this.setState({ data });
  };
  handleFetchHistoricalData = async (timeSpan, currency) => {
    const { timeSpan: currentTimeSpan, dataLoading } = this.state;
    const { coin } = this.props;

    if (dataLoading) return;
    this.setState({ timeSpan, dataLoading: true });
    // for optimistic update
    try {
      const historicalData = await API.fetchCoinsHistoricalData(
        coin,
        timeSpan,
        currency
      );
      historicalData.forEach(historicalDataPoint => {
        historicalDataPoint["HLCAverage"] = HLCAverage(
          historicalDataPoint.high,
          historicalDataPoint.low,
          historicalDataPoint.close
        );
      });

      if (this._isMounted)
        this.setState({ dataLoading: false, historicalData, timeSpan });
    } catch (error) {
      console.log("Error in CoinDetails handleFetchHistoricalData ");
      if (this._isMounted)
        this.setState({
          dataLoading: false,
          timeSpan: currentTimeSpan
        });
    }
  };
  onCurrencyChange = currency => {
    const { currency: currentCurrency, timeSpan } = this.state;
    if (currency !== currentCurrency) {
      this.handleFetchCoinsData(currency);
      this.handleFetchHistoricalData(timeSpan, currency);
      this.setState({ currency });
    }
  };
  render() {
    const { data, currency, historicalData, timeSpan } = this.state;
    const { following, coinInfo, setUserCoin, inWallet } = this.props;
    return (
      <Layout
        coinInfo={coinInfo}
        data={data}
        currency={currency}
        historicalData={historicalData}
        following={following}
        inWallet={inWallet}
        timeSpan={timeSpan}
        onTimeSpanChange={this.handleFetchHistoricalData}
        onCurrencyChange={this.onCurrencyChange}
        onFollow={() => setUserCoin(coinInfo.symbol, !following)}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const coin = ownProps.match.params.coin;
  const following = state.user.coinsList.includes(coin);
  const inWallet = state.user.wallet[coin] ? true : false;
  const coinInfo = state.coins.coinsInfo ? state.coins.coinsInfo[coin] : null;
  return {
    coin,
    following,
    inWallet,
    userCoinsList: state.user.coinsList,
    currency: state.user.currency,
    coinInfo
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCoinsList: () => dispatch(fetchCoinsList()),
  setUserCoin: (coin, follow) => dispatch(setUserCoin(coin, follow))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetails);
