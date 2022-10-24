import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/StatsContainer';
import { getStats } from '../features/statsSlice';
import StatItem from './StatItem';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';

export default function StatsContainer() {
  // get data from the store
  let { pending, interview, declined } = useSelector((store) => store.stats);
  // prepare stats data to iterate over it
  let statsData = [
    {
      color: '#e9b949',
      iconBackGround:'#fcefc7',
      icon: <FaSuitcaseRolling />,
      data: pending,
      text: 'Pending Applications ',
    },
    {
      color: '#647acb',
      iconBackGround:'#e0e8f9',
      icon: <FaCalendarCheck />,
      data: interview,
      text: 'Interviews Scheduled',
    },
    {
      color: '#d66a6a',
      iconBackGround:'#ffeeee',
      icon: <FaBug />,
      data: declined,
      text: 'Jobs Declined',
    },
  ];

  // get stats on first render
  let dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getStats());
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      {statsData.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </Wrapper>
  );
}
