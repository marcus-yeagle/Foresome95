import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppDispatch, AppState } from '../../store';
import { fetchCoinsInfo } from '../../store/actions/coins';
import { setFollowedCoin } from '../../store/actions/user';

import Layout from './Layout';

import PLAYERS from '../../store/players.json';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const PlayerSearch = ({ data }: Props) => {
  useEffect(() => {
    if (!data) {
      //   fetchCoinsInfo();
      // alert('GET Players');
    }
  }, [data, fetchCoinsInfo]);
  return <Layout data={data} onFollow={setFollowedCoin} />;
};

const mapStateToProps = (state: AppState) => {
  return {
    data: PLAYERS,
  };
};
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  // TODO: is there a better way to silence TS with something other than <any>?
  // fetchCoinsInfo: () => dispatch<any>(fetchCoinsInfo()),
  // TODO: extract 'coin' and 'follow' types from 'setFollowedCoin' arguments
  setFollowedCoin: (coin: string, follow: boolean) =>
    dispatch(setFollowedCoin(coin, follow)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearch);
