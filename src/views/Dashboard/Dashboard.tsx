import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Hourglass } from 'react95/dist/Hourglass/Hourglass';
import { fetchSidesData } from '../../store/actions/sides';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSidesData());
  }, []);
  const [showFollowing, setShowFollowing] = useState(false);
  const data = useSelector((state: any) => state.sides);
  console.log(data);
  return data.loading ? (
    <Hourglass size={32} style={{ margin: '48%' }} />
  ) : (
    <Layout
      sides={data}
      showingFollowing={showFollowing}
      showFollowing={() => setShowFollowing(true)}
      showTop={() => setShowFollowing(false)}
    />
  );
};

export default Dashboard;
