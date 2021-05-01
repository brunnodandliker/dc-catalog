import React from 'react';
import './style.css';

interface IStatCircleProps {
  half?: boolean;
}

const StatCircle : React.FC<IStatCircleProps> = ({ half = false }) => {

  return (
    <div className="stat-circle" />
  )
}

export default StatCircle;
